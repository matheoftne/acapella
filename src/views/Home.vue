<template>
    <div style="background-color: #D8E0FF;">
        <div class="titleContainer pad-base">
            <div class="titleText">
                <span style="{
                    width: 251px;
                    height: 57px;
                    flex-shrink: 0;
                    border-radius: 10px;
                    background: linear-gradient(90deg, #3454D1 0%, rgba(255, 255, 255, 0.00) 100%);
                }"></span>
                <h1 style="margin: 0;">Le média sensibilisant contre le cyber harcèlement</h1>
                <p style="font-weight: 700;">Un espace dédié à la sensibilisation et à la lutte contre le cyberharcèlement. À travers ce site, nous nous engageons à informer, éduquer et soutenir ceux qui sont victimes de cette menace.</p>
                <button>Découvrir</button>
            </div>
            <div>
                <div class="imgContainerHome" style="{
                    background-image: url('/home.png');
                    background-size: cover;
                    background-position: center;
                    background-color: #3454D1;
                    height: 60vh;
                    width: 80%;
                }">
                    <span class="msgExemple">
                        <i class="fa-solid fa-comment"></i>
                        <p>T’as pas d’amis</p>
                    </span>
                    <span class="msgExemple">
                        <i class="fa-brands fa-square-snapchat"></i>
                        <p>T’es moche </p>
                    </span>
                    <span class="msgExemple">
                        <i class="fa-brands fa-square-instagram"></i>
                        <p>T’es con</p>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .titleContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2em;
        text-align: left;
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