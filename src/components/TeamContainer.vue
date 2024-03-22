<script>
export default {
    data() {
        return {
            team1: [
                {
                    name: 'Théa Gomes',
                    role: 'Coach de vie',
                    img: '/thea.png'
                },
                {
                    name: 'Tom Raimbault',
                    role: 'Psychologue',
                    img: 'tom.png'
                },
                {
                    name: 'Samuel Landais',
                    role: 'Professeur en yoga du rire',
                    img: 'samuel.png'
                },
                {
                    name: 'Léo Dieumegard',
                    role: 'Expert en santé mentale',
                    img: 'leo.png'
                }
            ],

            team2: [
                {
                    name: 'Gaspard Renoux',
                    role: 'Psychothérapeute',
                    img: 'gaspard.png'
                },
                {
                    name: 'Mathéo Fontaine',
                    role: 'Sexologue',
                    img: 'matheo.png'
                },
                {
                    name: 'Joan Thomas',
                    role: 'Conseiller en développement personnel',
                    img: 'joan.png'
                },
                {
                    name: 'Erwan Guibault',
                    role: 'Éducateur spécialisé',
                    img: 'erwan.png'
                }
            ]
        }
    }
}
</script>

<template>
    <h2 style="color: #3454D1;">L’équipe Acapela</h2>
    <div class="allTeamsContainer" style="display: flex; justify-content: center; align-items: center; flex-direction: column; gap: 4em; margin: 8em">
        <div style="display: flex; justify-content: center; align-items: flex-start; gap: 6em;">
            <div class="teamContainer" v-for="team in team1" style="display: flex; justify-content: center; align-items: flex-start; flex-direction: column; gap: 2em;">
                <div class="imgContainer" style="width: 306px; aspect-ratio: 1/1; border-radius: 20px; overflow: clip;">
                    <img :src="team.img" :alt="team.name" style="width: 100%; aspect-ratio: 1/1; object-fit: cover; object-position: center">
                </div>
                <div style="text-align: start;">
                    <p class="name" style="font-weight: 700;">{{ team.name }}</p>
                    <p class="role" style="font-size: 0.7em;">{{ team.role }}</p>
                </div>
            </div>
        </div>
        <div style="display: flex; justify-content: center; align-items: flex-start; gap: 6em;">
            <div class="teamContainer" v-for="team in team2" style="display: flex; justify-content: center; align-items: flex-start; flex-direction: column; gap: 2em;">
                <div class="imgContainer" style="width: 306px; aspect-ratio: 1/1; border-radius: 20px; overflow: clip;">
                    <img :src="team.img" :alt="team.name" style="width: 100%; aspect-ratio: 1/1; object-fit: cover; object-position: center">
                </div>
                <div style="text-align: start;">
                    <p class="name" style="font-weight: 700;">{{ team.name }}</p>
                    <p class="role" style="font-size: 0.7em; width: 12em">{{ team.role }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>