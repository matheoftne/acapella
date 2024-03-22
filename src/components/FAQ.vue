<template>
    <div class="pad-base faqContainer">
        <h2>Questions récurrentes</h2>
        <h3>Retrouvez les questions qui reviennent le plus régulièrement dans cette FAQ</h3>
        <div class="faqItems" v-for="(faq, index) in faqs" :key="index" @click="toggleBlock(faq)">
            <div class="questionContainer">
                <h3 class="questionTitle">{{ faq.q }}</h3>
                <p class="answerText" v-if="faq.showAnswer">{{ faq.a }}</p>
            </div>
            <i class="fa-solid fa-chevron-down"></i>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        faqs: [
          { q: "Comment faire lors qu’on est victime de cyberharcèlement ? ", a: "Oui, très" , showAnswer: false},
          { q: "Qui pouvons-nous contacter pour en parler ? ", a: "Oui, vraiment très mal", showAnswer: false},
          { q: "Quelles sont les formes du cyberharcèlement ? ", a: "Oui, vraiment très mal", showAnswer: false},
          { q: "Que faire si on est témoin de cyberharcèlement ? ", a: "Oui, vraiment très mal", showAnswer: false},
          { q: "Quand commence le cyberharcèlement ? ", a: "Oui, vraiment très mal", showAnswer: false},
          { q: "Comment est puni le cyberharcèlement ? ", a: "Oui, vraiment très mal", showAnswer: false},
        ]
      }
    },
    methods: {
      toggleBlock(faq) {
        if (faq.showAnswer === true) {
          this.faqs.forEach(f => f.showAnswer = false);
        } else {
          this.faqs.forEach(f => f.showAnswer = false);
          faq.showAnswer = true;
        }
      },
    }
  }
  </script>
  
  <style>
    .faqItems {
        display: flex;
        width: 1348px;
        padding: 25px 33px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        border-radius: 10px;
        border: 1px solid var(--rouge, #FFA1A1);
        background: var(--Blanc, #FFF); 
    }

    .faqContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    h2 {
        position: relative;
        &::after {
            position: absolute;
            content: url('/red-splash-underline.svg');
            inset: 30% 0 auto auto;
            z-index: -5;
            width: 100%;
        }
    }
  </style>