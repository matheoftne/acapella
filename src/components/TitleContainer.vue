<template>
    <div style="background-color: #D8E0FF;">
        <div class="titleContainer pad-base">
            <div class="titleText">
                <span class="spanBehindTitle"></span>
                <h1 style="margin: 0; position: relative;">Le média sensibilisant contre le cyber harcèlement</h1>
                <p style="font-weight: 700;">Un espace dédié à la sensibilisation et à la lutte contre le cyberharcèlement. À travers ce site, nous nous engageons à informer, éduquer et soutenir ceux qui sont victimes de cette menace.</p>
                <button>Découvrir</button>
            </div>
            <div>
                <div class="">
                    <span class="msgExemple firstMsg">
                        <div class="socialLogoContainer iMessage"></div>
                        <p>T’as pas d’amis</p>
                    </span>
                    <span class="msgExemple secondMsg">
                        <div class="socialLogoContainer Snapchat"></div>
                        <p>T’es moche </p>
                    </span>
                    <span class="msgExemple thirdMsg">
                        <div class="socialLogoContainer Instagram"></div>
                        <p>T’es con</p>
                    </span>
                    <div class="imgContainerHome"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .socialLogoContainer {
        height: 4vh;
        width: 2.5em;
    }

    .iMessage {
        background-image: url('/imessage.png');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .Snapchat  {
        background-image: url('/snapchat.png');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .Instagram {
        background-image: url('/instagram2.png');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .msgExemple {
        display: flex;
        padding: 0.5em 2em;
        justify-content: center;
        align-items: center;
        gap: 20px;
        border-radius: 10px;
        background: rgba(163, 163, 163, 0.20);
        backdrop-filter: blur(9.350000381469727px);
        position: absolute;
        z-index: 2;
    }

    .msgExemple i {
        font-size: 2em;
    }

    .firstMsg {
        inset: 12em 15em auto auto;
    }

    .secondMsg {
        inset: 28em 45em auto auto;
    }

    .thirdMsg {
        inset: 45em 15em auto auto;
    }

    .imgContainerHome {
        background-image: url('/homme1.png');
        background-size: cover;
        background-position: -4vw;
        background-repeat: no-repeat;
        background-color: #3454D1;
        height: 65vh;
        width: 23%;
        border-radius: 15em 15em 0 0;
        position: absolute;
        z-index: 1;
        right: 20em;
        top: 14em;
        box-shadow: -25px 25px 0 0 #FFA1A1;
    }

    .spanBehindTitle{
        position: absolute;
        z-index: 0;
        inset: auto auto auto 4%;
        width: 251px;
        height: 57px;
        flex-shrink: 0;
        border-radius: 10px;
        background: linear-gradient(90deg, #3454D1 0%, rgba(255, 255, 255, 0.00) 100%);
    }

    .titleContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        height: 80vh;
    }

    .titleText {
        word-wrap: break-word;
        width: 40em;
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: flex-start;
    }
</style>