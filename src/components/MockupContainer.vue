<template>
    <div class="socialMediaPart pad-base">
        <div class="mockupContainer"></div>
        <div class="textMockupContainer">
            <h2>Retrouve <strong class="strongPink">Acapela</strong> sur tous tes réseaux préférés</h2>
            <p>In id purus est. Nullam eget velit vestibulum, mattis nisl nec, viverra  felis. Nulla facilisi. Curabitur finibus, lectus nec fermentum  efficitur, leo sapien sollicitudin mauris, id fermentum leo libero at  tortor.</p>
            <div class="allMediaContainer">
                <a class="mediaContainer instagramMedia"></a>
                <a class="mediaContainer youtubeMedia"></a>
                <a class="mediaContainer tiktokMedia"></a>
                <a class="mediaContainer linkedinMedia"></a>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .socialMediaPart {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 8em;
        position: relative;
    }
    
    .mockupContainer {
        background-image: url('/mockup1.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 70vh;
        width: 50vw;
        position: relative;
        z-index: 1;
    }

    .allMediaContainer {
        display: flex;
        gap: 2em;
    }

    .mediaContainer {
        height: 6em;
        width: 6em;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .instagramMedia {background-image: url('/instagram3.png');}

    .youtubeMedia {background-image: url('/youtube2.png');}

    .tiktokMedia {background-image: url('/tiktok2.png');}

    .linkedinMedia {background-image: url('/linkedin2.png');}

    .textMockupContainer {
        width: 45em;
        text-align: left;
        word-wrap: break-word;
    }

    .strongPink {color: #FFA1A1;}

    h2 {
        font-size: 3em;
        line-height: 1.1;
    }

</style>