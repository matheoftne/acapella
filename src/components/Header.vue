<script>

</script>

<template>
    <div class="menuContainer pad-base">
        <div class="logoContainer">
            <router-link to="/">
                <img class="logo" src="/logo-acapela.png" alt="">
            </router-link>
        </div>
        <nav class="menuItems">
            <router-link to="/">Parlons en ?</router-link>
            <router-link to="/">Cyberharcèlement</router-link>
            <router-link to="/">A propos</router-link>
            <router-link to="/blog">Blog</router-link>
            <router-link to="/quiz">Quiz</router-link>
            <router-link to="/chat-pro">Chat</router-link>
            <router-link class="btn contactBtn" to="/">Contact</router-link>
        </nav>
    </div>
</template>

<style>
    .menuContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
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