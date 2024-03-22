<script setup>

  import { ref } from 'vue';


</script>

<template>

    <div class="article-header">
        <h1>“ Le stalking, la nouvelle arme sur les réseaux sociaux “</h1>
    </div>

    <img class="article-thumbnail" src="/article-thumbnail-stalking.png" alt="Le stalking, la nouvelle arme sur les réseaux sociaux">

    <div class="article-content">

        <p>Le cyberharcèlement, un phénomène complexe à l'ère numérique, brouille la ligne entre communication persistante et harcèlement. Ce blog explore les détails des interactions en ligne, offrant des éclaircissements sur le moment où l'envoi persistant de messages bascule dans le harcèlement.</p>
    
        <h2>Le stalking c’est quoi ?</h2>
    
        <p>Alors, parlons un peu du stalking, ce phénomène qui peut transformer une simple admiration en un véritable cauchemar. Prenons l'exemple de l'influenceuse Maglha, qui a vécu cette réalité un peu trop de près. Son histoire, comme celle de tant d'autres, nous montre à quel point le stalking peut devenir sérieux et effrayant.</p>
    
        <h2>Quand l'admiration franchit les limites...</h2>
    
        <p>Imagine, tu partages ta vie, tes passions, un bout de ton quotidien sur les réseaux, et soudain, quelqu'un commence à prendre un peu trop à cœur son "rôle" de follower. Au début, ça peut paraître flatteur, n'est-ce pas ? Des likes, des commentaires élogieux... Mais quand ça commence à virer à l'obsession, ça n'a plus rien d'agréable.</p>
    
        <p>Le stalking, c'est pas juste une série de messages ou de commentaires. C'est une intrusion constante et non désirée dans la vie d'une personne. Ça peut être des appels, des messages, mais aussi des apparitions physiques, des suivis discrets... Bref, de quoi te faire sentir constamment observé et en insécurité.</p>
    
        <h2>L’expérience de Maghla</h2>
    
        <p>L'histoire de Maglha et son expérience avec le stalking prend une dimension encore plus sérieuse lorsqu'on apprend que son harceleur a été condamné à un an de prison. Cet événement souligne la gravité du cyberharcèlement et des comportements de stalking, et l'importance de les traiter avec le sérieux qu'ils méritent. Pour des informations plus détaillées sur cette affaire, je t'invite à consulter la source originale sur YouTube.</p>
    
        <img src="/article-content-image-stalking.png" alt="Le stalking, la nouvelle arme sur les réseaux sociaux">
    
        <h2>En conclusion, quoi retenir ?</h2>
    
        <p>L'histoire de Maglha, comme celle de tant d'autres, nous rappelle l'importance d'être attentifs à notre entourage, à nos interactions en ligne, et surtout, de respecter la limite fine entre intérêt et obsession. Soyons vigilants, respectueux et soutenons-nous les uns les autres pour que le monde numérique reste un espace d'échange et de liberté, pas de peur.</p>
    
        <p>Et toi, comment perçois-tu cette réalité du stalking ? As-tu des conseils, des expériences à partager pour aider ceux qui pourraient se trouver dans cette situation ? Partageons ensemble pour un internet plus sûr.</p>
    
        <span class="article-details">Ecrit par Elise Bronsout le 20/03/2024</span>

    </div>


</template>

<style scoped>

    .article-header {
        background-color: #3454D1;
        position: relative;
        inset: auto;
        text-align: left;
        padding: 9rem 0 15rem 0;
        color: white;
        text-wrap: balance;

        & h1 {
            width: 50%;
            margin-inline: auto;
            text-align: center;
            text-wrap: balance;
        }

    }

    .article-thumbnail {
        position: relative;
        top: -10rem;
        border-radius: 20px;
    }

    .article-content {
        width: 50%;
        margin-inline: auto;
        text-align: justify;
        position: relative;
        top: -8rem;

        & img {
            width: 100%;
            border-radius: 20px;
        }

        & .article-details {
            font-size: 14px;
            color: #6E6E6E;
        }


    }

</style>