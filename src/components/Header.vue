<script>

</script>

<template>
    <div class="menuContainer">
        <div class="logoContainer">
            <img class="logo" src="/logo-acapela.png" alt="">
        </div>
        <nav class="menuItems">
            <router-link to="/">Parlons en ?</router-link>
            <router-link to="/">Cyberharcèlement</router-link>
            <router-link to="/">A propos</router-link>
            <router-link to="/">Blog</router-link>
            <router-link to="/quiz">Quiz</router-link>
            <router-link to="/chat">Chat</router-link>
            <router-link class="btn contactBtn" to="/">Contact</router-link>
        </nav>
    </div>
</template>

<style>
    .menuContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2em;
    }

    .menuItems {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 2em;
    }

    .logo {
        height: 4em;
        width: 10em;
    }
</style>