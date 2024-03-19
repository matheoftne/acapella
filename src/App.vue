<script setup>
import Quiz from './components/Quiz.vue';
import Chat from './components/Chat/Chat.vue';
</script>

<template>
  <div>
    <Chat/>
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
