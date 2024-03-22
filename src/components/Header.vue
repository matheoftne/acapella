<script>

</script>

<template>
    <header>
        <div class="menuContainer pad-base">
            <div class="logoContainer">
                <router-link to="/">
                    <img class="logo" src="/logo-acapela.png" alt="">
                </router-link>
            </div>
            <nav class="menuItems">
                <router-link to="/parlons-en">Parlons en ?</router-link>
                <router-link to="/">Cyberharcèlement</router-link>
                <router-link to="/a-propos">A propos</router-link>
                <router-link to="/blog">Blog</router-link>
                <router-link to="/quiz">Quiz</router-link>
                <router-link to="/chat-pro">Chat</router-link>
                <router-link class="btn contactBtn" to="/">Contact</router-link>
            </nav>
        </div>
    </header>
</template>

<style>

    .menuContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        border-bottom: 1px solid #D7D7D7;
        position: fixed;
        inset: 0 0 auto;
        z-index: 999;
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

    header {
        margin-bottom: 132.67px;
    }

    nav a {

        position: relative;

    }

    nav a:hover::after, nav .router-link-active:not(.contactBtn)::after {

        position: absolute;
        content: '';
        inset: 50% 0 auto;
        z-index: -5;
        width: 100%;
        height: 30px;
        background-image: url('/blue-splash-underline.svg');
        background-size: 100% 100%;
        background-repeat: no-repeat;

    }

    
</style>