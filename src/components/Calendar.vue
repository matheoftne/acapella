<script setup>
    import { Calendar, DatePicker } from 'v-calendar';
    import 'v-calendar/style.css';
    import { ref } from 'vue';

    const selectedDate = ref(null);
    const selectedHour = ref(null);

    function updateDateWithHour() {
    if (selectedHour.value !== null && selectedDate.value) {
        const dateWithHour = new Date(selectedDate.value);
        dateWithHour.setHours(selectedHour.value);
        selectedDate.value = dateWithHour;
    }
}
    
</script>


<template>
  <div class="calendar">
    <DatePicker is-dark expanded trim-weeks v-model="selectedDate">
        <template #footer>
            <div class="footer-container" v-if="selectedDate">
                <form action="" v-on:submit.prevent="console.log('date: ', selectedDate, 'heure: ', selectedHour)">
                    <select v-model="selectedHour" @change="updateDateWithHour">
                        <option value="null">Select Hour</option>
                        <option v-for="hour in 24" :value="hour">{{ hour }}:00</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </template>
    </DatePicker>
  </div>
</template>


<style scoped>

</style>
