<script setup>
import MockupContainer from '../components/MockupContainer.vue';
import TitleContainer from '../components/TitleContainer.vue';
import StatsContainer from '../components/StatsContainer.vue';
import LastVidsContainer from '../components/LastVidsContainer.vue';
</script>

<template>
    <TitleContainer />
    <MockupContainer />
    <StatsContainer />
    <LastVidsContainer />
</template>

<style scoped>
    h2 {
        font-size: 3.2em;
        line-height: 1.1;
    }
</style>