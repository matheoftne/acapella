<script setup>
import Calendar from './Calendar.vue'
import Locaux from './Locaux.vue';
</script>

<template>

    <img class="background-top" src="/background-top-parlons-en.svg">

    <div class="hero">
        <div class="hero-content">
            <img src="/phone.svg">
            <div class="hero-text">
                <h1>Besoin d'en parler ?</h1>
                <p>Vous avez envie de parler du cyberharcèlement que vous subissez à quelqu’un. <br>Ce numéro est spécialement fait pour vous</p>
            </div>
        </div>
        <div class="cyberbullying-number">
            <a href="tel:3018">3018</a>
            <span>Numéro officiel face au cyberharcèlement</span>
        </div>
    </div>

    <div class="page-content">

        <div class="invitation-locaux pad-base">
            <img src="/locaux.png" alt="Nos locaux">
            <div class="text-wrapper">
                <h2>Retrouvez nous directement dans <strong>nos locaux</strong></h2>
                <p>Vous souhaitez rencontrez des personnes qui savent comment vous aider.<br> Nous avons de nombreux locaux capable de vous accueillir dans lesquels vous pourrez retrouvez des professionnels qui sauront comment vous aider.</p>
            </div>
            <img src="/swirl-red.svg" class="swirl">
        </div>
        
        <Locaux />

        <Calendar/>

        <div class="chat-cta pad-base">
            <div class="chat-cta-content">
                <div class="chat-cta-txt">
                    <h2>Un chat rien que pour vous</h2>
                    <p>Nous comprenons à quel point il peut être difficile de parler de ses expériences. C'est pourquoi nous avons mis en place ce chat anonyme, Un espace sûr où vous pouvez partager vos préoccupations, vos peurs et vos frustrations en toute confidentialité avec nos professionnels.</p>
                    <router-link to="/chat-pro" class="btn-chat">Allez sur le chat</router-link>
                </div>
                <img src="/chat-bubbles.png" alt="Allez voir le chat si vous avez besoin de parler anonymement">
            </div>
        </div>

    </div>




</template>

<style scoped>

    strong {
        font-weight: inherit;
        color: #FFA1A1;
    }



    .background-top {
        position: absolute;   
        inset: 0;
        z-index: -60;
        width: 100vw;
    }

    .page-content {
        display: flex;
        flex-direction: column;
        gap: 6rem;
        margin-bottom: 6rem;
    }

    .hero {
        min-height: calc(100svh - 132.67px - 100px);
        color: white;
        display: flex;
        align-items: center;
        padding-bottom: 232.67px;
        justify-content: space-around;

        & .hero-content {
            display: flex;
            align-items: center;
            gap: 4rem;

            & img {
                aspect-ratio: 1/1;
                width: 128px;
            }

            & .hero-text {

                & h1 {
                    text-align: start;
                }

                & p {
                    font-size: 20px;
                    max-width: 600px;
                    text-align: start;
                }
            }

        }

        & .cyberbullying-number {
            border-radius: 1.25rem;
            border: 1px solid #D9D9D9;
            background: rgba(217, 217, 217, 0.20);
            backdrop-filter: blur(10.699999809265137px);
            padding: 2.5rem 5rem;
            font-size: 1.25rem;
            font-weight: 700;
            display: flex;
            flex-direction: column;
            margin-top: 16rem;

            & a {
                color: #3454D1;
                font-size: 5rem;
                font-weight: 700;
            }

            & span {
                color: #282D2D;
                text-align: center;
                max-width: 75%;
                margin-inline: auto;
            }

        }

    }

    .chat-cta {

        & .chat-cta-content {

            background-color: #3454D1;
            border-radius: 25px;
            color: white;
            padding: 2rem 6.5rem;
            display: flex;
            align-items: center;
            justify-content: space-around;

            & .chat-cta-txt {
                text-align: start;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                align-items: flex-start;

                & h2 {
                    margin: 0;
                }

                & p {
                    font-size: 20px;
                }
            }

            & .btn-chat {
                background-color: white;
                color: #FFA1A1;
                padding: .75rem 1.75rem;
                border-radius: 10px;
                font-weight: 700;
            }

            & a {
                color: inherit;
            }

            & img {
                width: 500px;
            }

        }
    }

    .invitation-locaux {
        display: flex;
        align-items: center;
        gap: 4rem;
        position: relative;

        & .text-wrapper {
            display: flex;
            flex-direction: column;
            gap: 2.75rem;
            text-align: start;
            
            & h2 {
                margin: 0;
            }
            
            & p {
                font-size: 20px;
            }
        }
        
        & img {
            border-radius: 20px;
        }

    }

    .swirl {
        position: absolute;
        inset: -3.5% auto auto 2%;
    }

</style>