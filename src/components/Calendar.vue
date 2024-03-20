<script setup>
import { onUnmounted, ref, onMounted } from 'vue';
import { db } from '../firebase.js';
import { collection, query, onSnapshot, doc, deleteDoc, setDoc, addDoc } from 'firebase/firestore';
import { Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

// Define refs
const days = ref([]);
const selectedDate = ref(null);
const masks = ref({
  modelValue: 'DD-MM-YYYY HH:mm',
});

// Define functions and lifecycle hooks
onMounted(() => {
  const q = query(collection(db, 'days'));
  const unsubscribe = onSnapshot(q, (snapshot) => {
    days.value = snapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    }));
  });
  
  onUnmounted(() => {
    unsubscribe();
  });
});

</script>



<template>
    <div class="calendar">
        <DatePicker v-model.string="selectedDate" :masks="masks" mode="dateTime" is-dark is-required trim-weeks />
        <button @click="console.log(selectedDate ? 'date : ' + selectedDate : 'Date undefined')">Log</button>
    </div>

    <div class="print-test" v-for="day in days">
        <p>{{ day }}</p>
    </div>

</template>


<style scoped>

  .calendar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

</style>
