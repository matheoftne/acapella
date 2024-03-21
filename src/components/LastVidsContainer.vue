<script>

export default {
    data() {
        return {
            vids: [
                {
                    "duration": "1:00",
                    "desc": "Emilie nous raconte comment elle a surpassé le cyberharcèlement"
                },
                {
                    "duration": "1:00",
                    "desc": "Emilie nous raconte comment elle a surpassé le cyberharcèlement"
                },
                {
                    "duration": "1:00",
                    "desc": "Emilie nous raconte comment elle a surpassé le cyberharcèlement"
                },
            ]
        }
    }
}

</script>

<template>
    <div class="pad-base">
        <h2 style="color: #3454D1; text-align: left">Nos dernières vidéos</h2>
        <div class="vidsContainer" style="display: flex; flex-direction: row; gap: 10em; justify-content: center; align-items: flex-start;">
            <div v-for="vid in vids" style="">
                <div class="backgroundImage" style="text-align: left;">
                    <p class="duration">{{ vid.duration }}</p>
                    <p style="font-size: 2em; font-weight: 700; margin: 0; width: 8em;">{{ vid.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .backgroundImage {
        background-image: url(/femme1.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 21.5em;
        height: 35em;
        border-radius: 10px;
        padding: 1em;
        color: white;
    }

    .duration {
        padding: 4px 11px;
        border-radius: 20px;
        border: 1px solid #D3D3D3;
        background: rgba(217, 217, 217, 0.51);
    }

</style>