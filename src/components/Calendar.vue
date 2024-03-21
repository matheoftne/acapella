<script setup>

  import { onUnmounted, ref, onMounted, computed, watch } from 'vue';
  import { db } from '../firebase.js';
  import { collection, query, onSnapshot, doc, deleteDoc, setDoc, addDoc, getDoc, updateDoc, where } from 'firebase/firestore';
  import { DatePicker } from 'v-calendar';
  import 'v-calendar/style.css';

  // Total number of hours you can book
  const TOTAL_BOOKABLE_HOURS = 24;

  // Declare array of hours
  const hours = Array.from({ length: 24 }, (_, i) => i)

  // Define refs
  const days = ref([]);
  const selectedDate = ref(null);
  const selectedHour = ref('');
  const masks = ref({
    modelValue: 'DD-MM-YYYY'
  });
  const today = ref(new Date());
  const maxDate = ref(new Date('2024-12-31T23:59:59'));

  // Store available hours
  const availableHours = ref([]);

  // Store days marked as full
  const disabledDates = ref([]);

  // Dynamically change available hours array
  watch(selectedDate, async (newDate) => {
  if (newDate) {
      const formattedDate = formatDate(newDate);
      const docRef = doc(db, "days", formattedDate);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        availableHours.value = hours.filter(hour => data[`hour${hour}`] === undefined);
      } else {
        // If no document exists for the date, all hours are available
        availableHours.value = hours;
      }
    } else {
      availableHours.value = [];
    }
  });

  // Handle alert
  const showAlert = ref(false);
  const toggleAlert = () => {
    showAlert.value = !showAlert.value;
  };

  // Format the date to display it above the select
  const formattedSelectedDate = computed(() => {
    if (!selectedDate.value) return '';

    const d = new Date(selectedDate.value);
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  });

  // Format the dates that need to be disabled
  const formattedDisabledDates = computed(() => {
    return disabledDates.value.map(dateStr => {
      const [day, month, year] = dateStr.split('-').map(Number);
      return new Date(year, month - 1, day);
    });
  });



  // String the given date
  function formatDate(date) {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  }

// Async function to check document existence
async function checkDocument() {

  if (!selectedDate.value) {
    console.warn("Selected date is undefined");
    return;
  }

  const formattedDate = formatDate(selectedDate.value);
  const [day, month, year] = formattedDate.split('-');
  const hour = parseInt(selectedHour.value, 10);
  const date = `${day}-${month}-${year}`;
  const hourField = `hour${hour}`;

  const docRef = doc(db, "days", date);
  const docSnap = await getDoc(docRef);

  const dateTime = `${day} ${month} ${year} ${hour}h`
    console.log(dateTime);

  if (docSnap.exists()) {
    const data = docSnap.data()
    if (data[hourField] !== undefined) {
      console.log(`Hour ${hour} is already booked`)
    } else {
      console.log(`Hour ${hour} is not booked, adding the hour now!`);
      try {
        await updateDoc(docRef, {
          [hourField]: hour
        });
        console.log(`Hour ${hour} successfully added to document ${date}.`);

        // Check if all hours are now booked
        const bookedHours = Object.keys(data).filter(key => key.startsWith('hour')).length + 1; // +1 for the hour just booked
        if (bookedHours >= TOTAL_BOOKABLE_HOURS) {
          await updateDoc(docRef, { full: true });
          console.log("All hours are booked. Marking the day as full.");
        }
      } catch (e) {
        console.error("Error updating document: ", e);
      }
    }
  } else {
    try {
      await setDoc(docRef, {
        full: false,
        [hourField]: hour
      })
      console.log("Document successfully created with ID:", date);
    } catch (e) {
      console.error("Error creating document: ", e);
    }
  }
}

// Handle Submit
async function handleSubmit() {

  if (!selectedDate.value || !selectedHour.value) {
    toggleAlert()
    return
  }
      
    await checkDocument();
    selectedDate.value = null;

}

  // Define functions and lifecycle hooks
  onMounted(() => {

    const qAllDays = query(collection(db, 'days'));
    const unsubscribeAllDays = onSnapshot(qAllDays, (snapshot) => {
      days.value = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }));  

    });

    const qFullDays = query(collection(db, 'days'), where('full', '==', true));
    const unsubscribeFullDays = onSnapshot(qFullDays, (snapshot) => {
      disabledDates.value = snapshot.docs.map(doc => doc.id);
    });
    
    onUnmounted(() => {
      unsubscribeAllDays();
      unsubscribeFullDays();
    });
  });

  // Set today's date
  today.value.setHours(0, 0, 0, 0);

</script>



<template>
    <form class="calendar" @submit.prevent="handleSubmit">
        <DatePicker 
          v-model="selectedDate" 
          :masks="masks" mode="date" 
          :min-date="today"
          :max-date="maxDate"
          :disabled-dates="formattedDisabledDates"
          is-dark is-required trim-weeks is24hr />


        <div class="select-time" v-if="selectedDate">
          <p>{{ formattedSelectedDate }}</p>
          <select v-model="selectedHour">
            <option value="" disabled>Sélectionner une heure</option>
            <option v-for="hour in availableHours" :key="hour" :value="hour">{{ hour }}h</option>
          </select>
        </div>

        <button type="submit">Réserver</button>
    </form>

    <div class="reservation-alert-overlay" v-bind:class="showAlert ? 'display-alert' : ''">
      <div class="reservation-alert error-alert">
        <p>Veuillez sélectionner une date et un horaire</p>
        <button @click="toggleAlert">OK !</button>
      </div>
    </div>

</template>


<style scoped>

  .calendar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .reservation-alert-overlay {

    display: none;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    inset: 0;

    & .reservation-alert {
  
  
      position: fixed;
      inset: 35% 25%;
      color: black;
      border-radius: 20px;
      padding: 3rem;
      
      &.error-alert {
        background-color: rgba(255, 0, 0, 0.8);
      }
  
      & p {
        font-size: 20px;
      }
  
    }

    &.display-alert {

      display: block;
      z-index: 100;
      
      & .reservation-alert {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        z-index: 101;
        }
      }

  }

  .select-time {

    background-color: #0F172A;
    padding: 1rem 1rem 2rem;
    
    & select {
    background-color: #0F172A;
    border: white solid 1px;
    padding: .15rem;
    width: 80%;
    border-radius: 5px;

      &::-webkit-scrollbar {
        width: 4px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background: white;
        border-radius: 5px;
      }

    }

  }
  
</style>
