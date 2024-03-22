<script setup>

import { ref } from 'vue';

const videos = ref([
    {
        title: 'Emilie nous raconte comment elle a surpassé le cyberharcèlement',
        img: 'blog-video-thumbnail-1.png',
        videoLength: '1:00'
    },
    {
        title: 'Emilie nous raconte comment elle a surpassé le cyberharcèlement',
        img: 'blog-video-thumbnail-1.png',
        videoLength: '1:00'
    },
    {
        title: 'Emilie nous raconte comment elle a surpassé le cyberharcèlement',
        img: 'blog-video-thumbnail-1.png',
        videoLength: '1:00'
    }
  ])

</script>

<template>
    <div class="latest-videos pad-base">
        <h2>Nos dernières vidéos</h2>
        <div class="videos-grid">
            <div class="grid-item" v-for="video in videos" :key="video.title">
                <img class="thumbnail" :src="video.img" :alt="`Image pour ${video.title}`">
                <div class="video-grid-item-content">
                    <span>{{ video.videoLength }}</span>
                    <h3>{{ video.title }}</h3>
                </div>
                <img class="play-button" src="/Play.svg" alt="Lire la vidéo">
            </div>
        </div>
    </div>
</template>

<style scoped>
    .videos-grid {
        
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6rem;
        text-align: start;
        
        & .grid-item {
            position: relative;
            overflow: clip;
            border-radius: 15px;
            
            & .thumbnail {
                width: 100%;
                height: 100%;
            }

            & .video-grid-item-content {
                position: absolute;
                inset: auto 1rem 1%;
                color: white;
            }

            & h3 {
                font-size: 30px;
                margin-top: 8px;
            }

            & span {
                font-size: 16px;
                font-weight: 700;
                border-radius: 1.25rem;
                border: 1px solid #D3D3D3;
                background: rgba(217, 217, 217, 0.51);
                padding: .25rem .7rem;
            }

            & .play-button {
                position: absolute;
                inset: 5% 5% auto auto;
                cursor: pointer;
            }

        }

    }

</style>