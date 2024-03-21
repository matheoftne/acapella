<script setup>

import Chat from './components/Chat/Conversation.vue'
import Header from './components/Header.vue'
import Quiz from './components/Quiz.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <Header />
  <router-view/>
  <Footer />
</template>

<style scoped>

</style>
