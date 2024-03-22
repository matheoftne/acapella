<template>

<div class="locaux pad-base">
        <div class="local">
            <p>Local Paris</p>
            <p>12 Rue Henry Barbus</p>
            <p>75010 Paris</p>
            <a href="tel:0208564752">02 08 56 47 52</a>
            <a href="mailto:bonjour@acapela.fr">bonjour@acapela.fr</a>
        </div>
        <div class="local">
            <p>Local Lyon</p>
            <p>07 Avenue Pasteur</p>
            <p>69000 Lyon</p>
            <a href="tel:0226354158">02 26 35 41 58 </a>
            <a href="mailto:bonjour@acapela.fr">bonjour@acapela.fr</a>
        </div>
        <div class="local">
            <p>Local Rennes</p>
            <p>67 Boulevard Carneau</p>
            <p>35000 Rennes</p>
            <a href="0214231159">02 14 23 11 59</a>
            <a href="mailto:bonjour@acapela.fr">bonjour@acapela.fr</a>
        </div>
        <div class="local">
            <p>Local Marseille</p>
            <p>15 Rue de la cannebière</p>
            <p>13000 Marseille</p>
            <a href="0278963223">02 78 96 32 23</a>
            <a href="mailto:bonjour@acapela.fr">bonjour@acapela.fr</a>
        </div>
    </div>

</template>

<style scoped>

.locaux {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.75rem;
        font-size: 20px;
        color: white;

        & a {
            color: inherit;
        }

        .local {
            background-color: #FFA1A1;
            border-radius: 1.25rem;
            padding: 2.5rem;
            text-align: start;

            display: flex;
            flex-direction: column;
            gap: 1rem;

            & p {
                margin: 0;

                &:first-of-type {
                    font-weight: 700;
                }
            }

        }

    }

</style>