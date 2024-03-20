<script setup>
import Quiz from './components/Quiz.vue';
import Chat from './components/Chat/Chat.vue';
import Calendar from './components/Calendar.vue';
</script>

<template>
  <div>
    <Calendar/>
    <!-- <Chat/> -->
    <!-- <Quiz/> -->
  </div>
</template>

<style scoped>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
