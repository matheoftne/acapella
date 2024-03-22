<script>

</script>

<template>
    <footer>
        <div class="top-row pad-base">
            <div class="join-asso">
                <div class="text-wrapper">
                    <h2>Rejoindre notre association</h2>
                    <p>Rejoignez une grande équipe<br> de spécialistes</p>
                </div>
                <button>Rejoindre</button>
            </div>
        </div>
        <div class="mid-row pad-base">
            <router-link to="/" class="logo-router-link">
                <img class="logo" src="/logo-acapela.png" alt="">
            </router-link>
            <div class="grid-item">
                <h3>Réseaux sociaux</h3>
                <div class="grid-item-content">
                    <a href=""><img src="/Instagram.png" alt=""></a>
                    <a href=""><img src="/YouTube.png" alt=""></a>
                    <a href=""><img src="/TikTok.png" alt=""></a>
                    <a href=""><img src="/LinkedIn.png" alt=""></a>
                </div>
            </div>
            <div class="grid-item">
                <h3>Navigation</h3>
                <div class="grid-item-content grid-item-column">
                    <router-link to="/">Accueil</router-link>
                    <router-link to="/parlons-en">Parlons en ?</router-link>
                    <router-link to="/">A propos</router-link>
                    <router-link to="/">Cyberharcèlement</router-link>
                    <router-link to="/blog">Blog</router-link>
                    <router-link to="/">Contact</router-link>
                </div>
            </div>
            <div class="grid-item">
                <h3>Légal</h3>
                <div class="grid-item-content grid-item-column">
                    <a href="">Mentions Légales</a>
                    <a href="">Politique de confidentialité</a>
                </div>
            </div>
            <div class="grid-item">
                <div class="subgrid-item">
                    <h3>Contact</h3>
                    <div class="subgrid-item-content">
                        <a href="tel:0253695247">02 53 69 52 47</a>
                        <a href="mailto:bonjour@acapela.fr">bonjour@acapela.fr</a>
                    </div>
                </div>
                <div class="subgrid-item">
                    <h3>Adresse</h3>
                    <div class="subgrid-item-content">
                        <p>12 rue des charmes,<br> 75000 Paris</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bot-row">
            <div class="inner-row-content pad-base">
                <span class="credits">© 2024  All rights reserved.</span>
                <div class="legal-links">
                    <a href="">Mentions Légales</a>
                    <a href="">Politique de confidentialité</a>
                </div>
            </div>
        </div>
    </footer>

</template>

<style scoped>

    footer {

        & .top-row {
            & .join-asso {
                background-color: #3454D1;
                padding-block: 3.75rem;
                border-radius: 25px;
                color: white;

                & .text-wrapper {
                    max-width: 500px;
                    margin-inline: auto;

                    & h2 {
                        font-size: 30px;
                    }

                    & p {
                        font-size: 20px;
                    }

                }

                & button {
                    color: #282D2D;
                    background-color: white;
                    padding: 20px 100px;
                    border-radius: 30px;
                    margin-top: 25px;
                }

            }
        }

        & .mid-row {
            display: grid;
            align-items: start;
            grid-template-columns: 1fr 1.5fr repeat(3, 1fr);
            gap: 2rem;

            & .logo-router-link {
                margin-inline: 5rem;
            }

            & .grid-item {

                text-align: start;


                & .subgrid-item {

                    &:first-of-type {
                        margin-bottom: 3rem;
                    }

                    & .subgrid-item-content {

                        display: flex;
                        flex-direction: column;
                        gap: .5rem;

                        & p {
                            margin: 0;
                        }

                    }

                }

            }

        }

        & .bot-row {
            background-color: #3454D1;
            color: white;
            width: 100%;
            margin-top: 2em;

            & .legal-links {

                display: flex;
                align-items: center;
                gap: 1rem;

                & a {
                    color: inherit;
                }

            }


            & .inner-row-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-block: 1.5rem;
            }
        }

    }

    .grid-item-column {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    
</style>