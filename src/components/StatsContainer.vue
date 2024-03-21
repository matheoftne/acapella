<script>
export default {
    data() {
        return {
            stats: [
                {
                    "num": "49%",
                    "desc": "des victimes ont déjà pensé au suicide"
                },
                {
                    "num": "38%",
                    "desc": "des collègiens reçoivent des menaces"
                },
                {
                    "num": "1 sur 5",
                    "desc": "élève déclare avoir séché l’école à cause de la cyberintimidation"
                },
                {
                    "num": "6%",
                    "desc": "des jeunes reconnaissent avoir été auteur de cyber-harcèlement"
                },
            ]
        }
    }
}
</script>

<template>
    <div style="background-color: #3454D1; height: 50vh;">
        <h2 style="color: #fff; padding: 1em;">Chiffres clés du cyber harcèlement</h2>
        <div style="display: flex; justify-content: center; align-items: center; gap: 2em; flex-direction: row;">
            <div v-for="stat in stats" style="color: #fff; display: flex; justify-content: center; flex-direction: column; text-align: left; width: 15em; height: 10em; border-radius: 20px; border: 1px solid var(--Blanc, #FFF); background: rgba(255, 255, 255, 0.20); backdrop-filter: blur(2px); padding: 1em 2em;">
                <p style="font-size: 3em; font-weight: 700; margin: 0;">{{ stat.num }}</p>
                <p>{{ stat.desc }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>