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

  // Email const
  const email = ref('');
  const emailError = ref(null);

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
  const alertInfo = ref({
    dateAndTime: { show: false, message: 'Veuillez sélectionner une date et un horaire' },
    email: { show: false, message: 'Veuillez entrer une adresse email valide' }
  });

  const toggleAlert = (key, show) => {
    alertInfo.value[key].show = show;
  };



  // Format the dates that need to be disabled
  const formattedDisabledDates = computed(() => {
    return disabledDates.value.map(dateStr => {
      const [day, month, year] = dateStr.split('-').map(Number);
      return new Date(year, month - 1, day);
    });
  });

  // Validate email
  function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

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
    if (data[hourField]) {
      console.log(`Hour ${hour} is already booked by ${data[hourField]}`);
    } else {
      console.log(`Hour ${hour} is not booked, adding the hour now for ${email.value}!`);
      try {
        await updateDoc(docRef, {
          [hourField]: email.value
        });
        console.log(`Hour ${hour} successfully added to document ${date} for ${email.value}.`);

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
      console.log("Document successfully created with ID:", date, " for ", email.value);
    } catch (e) {
      console.error("Error creating document: ", e);
    }
  }
}

// Handle Submit
async function handleSubmit() {

  if (!selectedDate.value || !selectedHour.value) {
    toggleAlert('dateAndTime', true)
    return
  } else {
    toggleAlert('dateAndTime', false);
  }

  if (!validateEmail(email.value)) {
    toggleAlert('email', true);
    return;
  } else {
    toggleAlert('email', false);
  }

  emailError.value = null;
      
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
  <section class="rdv">
    <h2>Prenez rendez-vous avec un spécialiste</h2>
    <p class="subheader">Nous sommes prêt à vous accompagner pour trouver des solutions à vos problèmes</p>
    <form class="calendar" @submit.prevent="handleSubmit">
      <div class="select-day">
        <DatePicker 
          v-model="selectedDate" 
          :masks="masks" mode="date" 
          :min-date="today"
          :max-date="maxDate"
          :disabled-dates="formattedDisabledDates"
          is-dark is-required trim-weeks is24hr>

          <template #default="{ inputValue, inputEvents }">
            <input :value="inputValue" v-on="inputEvents" class="calendar-info-picker" placeholder="Sélectionnez une date"/>
          </template>

        </DatePicker>
      </div>


        <div class="select-time" v-if="selectedDate">
          <select v-model="selectedHour" class="calendar-info-picker">
            <option value="" disabled>Sélectionnez une heure</option>
            <option v-for="hour in availableHours" :key="hour" :value="hour">{{ hour }}h</option>
          </select>
        </div>

        <input type="email" class="calendar-info-picker" placeholder="Votre e-mail" v-model="email">

        <button type="submit" class="submit-calendar-info">Prendre rendez-vous</button>
    </form>

    <div class="reservation-alert-overlay" v-if="alertInfo.dateAndTime.show">
      <div class="reservation-alert error-alert">
        <p>{{ alertInfo.dateAndTime.message }}</p>
        <button @click="toggleAlert('dateAndTime', false)">OK</button>
      </div>
    </div>

    <div class="reservation-alert-overlay" v-if="alertInfo.email.show">
      <div class="reservation-alert error-alert">
        <p>{{ alertInfo.email.message }}</p>
        <button @click="toggleAlert('email', false)">OK</button>
      </div>
    </div>

  </section>

</template>


<style scoped>

h2 {
  color: #3454D1;
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 0;
}

.subheader {
  font-size: 20px;
  color: #282D2D;
}

  .reservation-alert-overlay {

    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    inset: 0;

    & .reservation-alert {
  
  
      position: fixed;
      inset: 35% 25%;
      color: #282D2D;
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

  .rdv {
    background-color: #D8E0FF;
    padding: 3rem 5rem;
  }

  form.calendar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    gap: 1.15rem;
  }

  .calendar-info-picker {
    background-color: white;
    color: #282D2D;
    vertical-align: middle;
    border: unset;
    padding: 0 1.2em;
    border-radius: 10px;
    min-height: 80px;
    font-size: 18px;
  }
  
  .submit-calendar-info {
    font-size: 18px;
    min-height: 80px;
    background-color: #3454D1;
    text-wrap: nowrap;
    color: white;
    font-weight: 400;
    flex-grow: 2;
  }

  .select-time {

    & select {

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
