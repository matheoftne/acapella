<script setup>

  import { ref } from 'vue';


  const articles = ref([
    {
        title: 'Le stalking, la nouvelle arme sur les réseaux sociaux',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin  rhoncus ante eget tempor. Proin eu nunc turpis. Aenean auctor elit at  vehicula blandit.',
        thumbnail: '/blog-thumbnail-1.png'
    },
    {
        title: 'Comment protéger sa vie privée',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin  rhoncus ante eget tempor. Proin eu nunc turpis. Aenean auctor elit at  vehicula blandit.',
        thumbnail: '/blog-thumbnail-2.png'
    },
    {
        title: 'Le collège de Jean Moulin organise un évènement avec Acapela',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin  rhoncus ante eget tempor. Proin eu nunc turpis. Aenean auctor elit at  vehicula blandit.',
        thumbnail: '/blog-thumbnail-3.png'
    },
    {
        title: 'Comment ... santé mentale',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin  rhoncus ante eget tempor. Proin eu nunc turpis. Aenean auctor elit at  vehicula blandit.',
        thumbnail: '/blog-thumbnail-4.png'
    },
    {
        title: 'Que faire si on est témoin d’une situation de cyberharcèlement ?',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin  rhoncus ante eget tempor. Proin eu nunc turpis. Aenean auctor elit at  vehicula blandit.',
        thumbnail: '/blog-thumbnail-5.png'
    },
    {
        title: 'Que faire si mon enfant est cyberharcelé ?',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin  rhoncus ante eget tempor. Proin eu nunc turpis. Aenean auctor elit at  vehicula blandit.',
        thumbnail: '/blog-thumbnail-6.png'
    },
    
  ])

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
    },
    {
        title: 'Emilie nous raconte comment elle a surpassé le cyberharcèlement',
        img: 'blog-video-thumbnail-1.png',
        videoLength: '1:00'
    }
  ])

</script>

<template>

    <div class="blog-header">
        <h1>Découvrez l’actualité autour du cyberharcèlement et de notre association</h1>
    </div>

    <div class="blog-content">
        <div class="latest-articles pad-base">
            <h2>Nos derniers articles</h2>
            <div class="articles-grid">
                <div class="grid-item" v-for="article in articles" :key="article.title">
                    <img class="thumbnail" :src="article.thumbnail" :alt="`Image pour ${article.title}`">
                    <h3>“{{ article.title }}“</h3>
                    <p>{{ article.excerpt }}</p>
                    <router-link to="/article" class="read-article">Lire l'article <img src="/right-arrow.svg" alt="Lire l'article"> </router-link>
                </div>
            </div>
        </div>
        
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
    </div>

</template>

<style scoped>

    .blog-header {
        background: linear-gradient(90deg, #3454D1 0%, #9BB0FF 100%);
        position: relative;
        inset: auto;
        text-align: left;
        padding: 5rem 0 5rem 5rem;
        color: white;
        margin-bottom: 5rem;
        text-wrap: balance;
    }

    h2 {
        font-size: 1.875em;
        font-weight: 700;
    }

    .articles-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        text-align: start;

        & .grid-item {

            display: grid;
            grid-template-columns: 1fr;
            
            & .thumbnail {
                width: 100%;
                border-radius: 10px;
            }
            
            & .read-article {
                display: flex;
                align-items: center;
                gap: 1rem;
                color: #3454D1
            }
        }
        
    }
    
    .videos-grid {
        
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 3rem;
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

    h2 {
        text-align: start;
        position: relative;
        margin-bottom: 6rem;

        &::after {
            position: absolute;
            content: url('/red-splash-underline.svg');
            inset: 50% 0 auto auto;
            z-index: -5;
            width: 100%;
        }
    }

</style>