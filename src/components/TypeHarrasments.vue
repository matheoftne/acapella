<script setup>
import { ref } from 'vue'

const types = ref([
    {
        title: 'Moral',
        desc: "Le fait d'imposer à autrui des gestes, paroles, comportements, attitudes répétés visant ou conduisant à dégrader les conditions de vie et/ou de travail",
        bColor: '#FFC8E9'
    },
    {
        title: 'Sexuel',
        desc: "Le fait d'imposer à une personne, de façon répétée, des propos ou comportements à connotation sexuelle ou sexiste",
        bColor: '#FDFF9A'
    },
    {
        title: 'Diffamation',
        desc: "La diffamation consiste à affirmer un fait qui porte atteinte à l'honneur ou à la considération d'une personne",
        bColor: '#DEFFBD'
    },
    {
        title: 'Stalking',
        desc: "Une forme de harcèlement névrotique qui fait référence à une attention obsessive et non désirée accordée à un individu ou à un groupe de personnes",
        bColor: '#FFD09A'
    },
    {
        title: 'Doxing',
        desc: "L'acte de révéler des informations qui permettent d'identifier quelqu'un en ligne, comme le véritable nom, l'adresse...",
        bColor: '#BDCFFF'
    }
])
</script>

<template>
    <div class="types-harassment pad-base">
        <h2 style="color: #3454D1; text-align: center;">Les principaux types de cyberharcèlement</h2>
        <h3 style="text-align: center;">Il existe différents types de cyberharcèlement qui sont</h3>
        <div class="types-flex">
            <div class="topItems">
                <div class="itemContent" style="background-color: #FFC8E9;">
                    <h3 style="color: #000;">Moral</h3>
                    <p style="color: #000;">Le fait d'imposer à autrui des gestes, paroles, comportements, attitudes répétés visant ou conduisant à dégrader les conditions de vie et/ou de travail</p>
                    <div style="display: flex; justify-content: flex-end;">
                        <i class="fa-solid fa-arrow-right" style="color: #000; font-size: 1.5em;"></i>
                    </div>
                </div>
                <div class="itemContent" style="background-color: #FDFF9A;">
                    <h3 style="color: #000;">Sexuel</h3>
                    <p style="color: #000;">Le fait d'imposer à une personne, de façon répétée, des propos ou comportements à connotation sexuelle ou sexiste</p>
                    <div style="display: flex; justify-content: flex-end;">
                        <i class="fa-solid fa-arrow-right" style="color: #000; font-size: 1.5em;"></i>
                    </div>
                </div>
                <div class="itemContent" style="background-color: #DEFFBD;">
                    <h3 style="color: #000;">Diffamation</h3>
                    <p style="color: #000;">La diffamation consiste à affirmer un fait qui porte atteinte à l'honneur ou à la considération d'une personne</p>
                    <div style="display: flex; justify-content: flex-end;">
                        <i class="fa-solid fa-arrow-right" style="color: #000; font-size: 1.5em;"></i>
                    </div>
                </div>
            </div>
            <div class="bottomItems">
                <div class="itemContent" style="background-color: #FFD09A;">
                    <h3 style="color: #000;">Stalking</h3>
                    <p style="color: #000;">Une forme de harcèlement névrotique qui fait référence à une attention obsessive et non désirée accordée à un individu ou à un groupe de personnes</p>
                    <div style="display: flex; justify-content: flex-end;">
                        <i class="fa-solid fa-arrow-right" style="color: #000; font-size: 1.5em;"></i>
                    </div>
                </div>
                <div class="itemContent" style="background-color: #BDCFFF;">
                    <h3 style="color: #000;">Doxing</h3>
                    <p style="color: #000;">L'acte de révéler des informations qui permettent d'identifier quelqu'un en ligne, comme le véritable nom, l'adresse...</p>
                    <div style="display: flex; justify-content: flex-end;">
                        <i class="fa-solid fa-arrow-right" style="color: #000; font-size: 1.5em;"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.topItems {
    margin-top: 4em;
    display: flex;
    justify-content: center;
    gap: 2em;
    align-items: center;
    margin-bottom: 2em;
}

.bottomItems {
    display: flex;
    justify-content: center;
    gap: 2em;
    align-items: center;
    margin-bottom: 2em;
}

.itemContent {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 20em;
    height: 12em;
    padding: 1em;
    border-radius: 10px;
}

p {
    width: 18em;
}

</style>
