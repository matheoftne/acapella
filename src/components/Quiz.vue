<script setup>

  import { ref, computed, onMounted, onUnmounted } from 'vue';

  onMounted(() => {
  window.addEventListener('keyup', handleEnterPress);
  });

  onUnmounted(() => {
    window.removeEventListener('keyup', handleEnterPress);
  });

  const handleEnterPress = (event) => {
    if (event.key === 'Enter' && getCurrentQuestion.value.selected) {
      nextQuestion();
    }
  };


  const questions = ref([
    {
      question: 'Êtes-vous victime d’insultes, d\'exposition à des photos à caractère obscène, de stalking ou encore de doxing ?',
      options: [
        'Oui',
        'Non'
      ],
      victimPoint: 0,
      offenderPoint: null,
      witnessPoint: null,

      selected: null
    },
    {
      question: 'Avez-vous déjà insulté, menacé ou autres quelqu’un de manière récurrente ?',
      options: [
        'Oui',
        'Non'
      ],
      victimPoint: null,
      offenderPoint: 0,
      witnessPoint: null,

      selected: null
    },
    {
      question: 'Avez-vous déjà partagé des informations privées ou des rumeurs sur quelqu\'un sans leur consentement ?',
      options: [
        'Oui',
        'Non'
      ],
      victimPoint: null,
      offenderPoint: 0,
      witnessPoint: null,

      selected: null
    },
    {
      question: 'Avez-vous déjà été témoin de messages insultants ou menaçants à une personne sur les réseaux sociaux ?',
      options: [
        'Oui',
        'Non'
      ],
      victimPoint: null,
      offenderPoint: null,
      witnessPoint: 0,

      selected: null
    },
    {
      question: 'Avez-vous déjà utilisé des insultes ou des propos offensants dans des discussions en ligne pour intimider quelqu\'un ?',
      options: [
        'Oui',
        'Non'
      ],
      victimPoint: null,
      offenderPoint: 0,
      witnessPoint: null,

      selected: null
    },
    {
      question: 'Avez-vous déjà utilisé des insultes ou des propos offensants dans des discussions en ligne pour intimider quelqu\'un ?',
      options: [
        'Oui',
        'Non'
      ],
      victimPoint: null,
      offenderPoint: 0,
      witnessPoint: null,

      selected: null
    },
    {
      question: 'Avez-vous déjà remarqué des changements dans le comportement en ligne d\'une personne qui pourraient indiquer qu\'elle est victime de cyberharcèlement ?',
      options: [
        'Oui',
        'Non'
      ],
      victimPoint: null,
      offenderPoint: null,
      witnessPoint: 0,

      selected: null
    },
    {
      question: 'Avez-vous déjà incité d\'autres personnes à harceler ou à intimider quelqu\'un en ligne ?',
      options: [
        'Oui',
        'Non'
      ],
      victimPoint: null,
      offenderPoint: 0,
      witnessPoint: null,

      selected: null
    },
    {
      question: 'Sentez-vous été exclu(e) ou ignoré(e) sur les plateformes en ligne ?',
      options: [
        'Oui',
        'Non'
      ],
      victimPoint: 0,
      offenderPoint: null,
      witnessPoint: null,

      selected: null
    },
    {
      question: 'Recevez-vous régulièrement des messages ou des commentaires offensants en ligne ?',
      options: [
        'Oui',
        'Non'
      ],
      victimPoint: 0,
      offenderPoint: null,
      witnessPoint: null,

      selected: null
    },
    {
      question: 'As-tu déjà senti que tu avais le pouvoir ou le contrôle sur quelqu\'un d\'autre grâce à tes actions ?',
      options: [
        'Oui',
        'Non'
      ],
      victimPoint: null,
      offenderPoint: 0,
      witnessPoint: null,

      selected: null
    },
    {
      question: 'As-tu déjà fait des commentaires sur le physique, la sexualité, ou la religion de quelqu\'un  ?',
      options: [
        'Oui',
        'Non'
      ],
      victimPoint: null,
      offenderPoint: 0,
      witnessPoint: null,

      selected: null
    },
  ])

  const quizEnded = ref(false)
  const currentQuestion = ref(0)

  const finalScore = computed(() => {
    let victimScore = 0
    let offenderScore = 0
    let witnessScore = 0
    questions.value.forEach(q => {
      if (q.selected == q.victimPoint) {
        victimScore++;
      } else if (q.selected == q.offenderPoint) {
        offenderScore++;
      } else if (q.selected == q.witnessPoint) {
        witnessScore++;
      }
    })
    return { victimScore, offenderScore, witnessScore };
  })

  const getCurrentQuestion = computed(() => {
    let question = questions.value[currentQuestion.value]
    question.index = currentQuestion.value
    return question
  })

  const setAnswer = e => {
    questions.value[currentQuestion.value].selected = e.target.value
    e.target.value = null
  }

  const nextQuestion = () => {
    if (currentQuestion.value < questions.value.length - 1) {
      currentQuestion.value++
    } else {
      quizEnded.value = true
    }
  }

  const prevQuestion = () => {
    if (currentQuestion.value > 0) {
      currentQuestion.value--;
    }
  };


  const progressBarPercentage = computed(() => {
    if (!quizEnded.value) {
      return (currentQuestion.value / questions.value.length) * 100;
    } else {
      return 100;
    }
  });



</script>

<template>

  <div class="quiz-header">
    <h1>Quiz</h1>
    <div class="progress-bar-cont" :style="{ width: progressBarPercentage + '%' }">
      <div class="progress-bar"></div>
      <p v-if="progressBarPercentage !== 0">{{ Math.round(progressBarPercentage) }}%</p>
    </div>
    
  </div>

  <div class="quiz-ctn">

    <h2 v-if="!quizEnded">Question n°{{ getCurrentQuestion.index + 1 }}</h2>

    <section class="quiz">
      <img src="/guillemet_1.svg" alt="" class="guillemet guillemet-1">
      <img src="/guillemet_2.svg" alt="" class="guillemet guillemet-2">
      <div class="quiz-playing" v-if="!quizEnded">

        <div class="question">{{ getCurrentQuestion.question }}</div>
        <div class="options">
          <label class="option"
          v-for="(option, index) in getCurrentQuestion.options" 
          :key="index" 
          :class="{ 'option-selected': getCurrentQuestion.selected !=null && index == getCurrentQuestion.selected }"
          >
  
            {{ option }}
            
            <input type="radio" :name="getCurrentQuestion.index" :value="index" v-on:change="setAnswer" v-model="getCurrentQuestion.selected">
            
          </label>
        </div>
  
  
        <div class="buttons">
  
          <button v-on:click="prevQuestion" :disabled="getCurrentQuestion.index == 0">
            Précédent
          </button>
    
          <button v-on:click="nextQuestion" :disabled="!getCurrentQuestion.selected">
            {{
              getCurrentQuestion.index == questions.length-1
              ? 'Finir le quiz'
              : getCurrentQuestion.selected == null
              ? 'Choisir une réponse'
              : 'Passer à la prochaine question'
            }}
          </button>
  
        </div>

      </div>

      <div class="quiz-ended" v-if="quizEnded">

        <div class="quiz-result-offender result" v-if="finalScore.offenderScore > 4">
          <h3>Vos réponses portent plus vers un comportement proche de celui d'un harceleur</h3>
          <p>Prenez le temps de réfléchir à vos mots</p>
          <p>N'hésitez pas à parler à un professionnel pour vous faire écouter</p>
        </div>

        <div class="quiz-result-offender result" v-if="finalScore.victimScore > 3">
          <h3>Vos réponses portent plus vers un comportement proche d'une personne qui est harcelée</h3>
          <p>Il est important de se rappeler que vous n'êtes pas responsable de ce que vous vivez. Chercher du soutien auprès d'amis, de la famille ou de professionnels peut être un premier pas vers le rétablissement.</p>
          <p>N'hésitez pas à parler à un professionnel pour vous faire écouter</p>
        </div>

        <div class="quiz-result-offender result" v-if="finalScore.witnessScore > 1">
          <h3>Vos réponses indiquent que vous êtes témoin d'harcèlement</h3>
          <p>Votre position vous permet d'aider les victimes en étant leur voix ou en les soutenant dans leur démarche d'aide. S'informer sur les meilleures façons d'intervenir peut faire une différence.</p>
          <p>N'hésitez pas à parler à un professionnel pour vous faire écouter</p>
        </div>
        
        <div class="quiz-result-none result" v-if="finalScore.offenderScore <= 4 && finalScore.victimScore <= 3 && finalScore.witnessScore <= 1">
          <h3>Vos réponses démontrent que vous n'êtes ni témoin, harceleur ou harcelé</h3>
          <p>Si vous avez des doutes, ne vous fiez pas au résultat du questionnaire. Il est important de se faire confiance.</p>
          <p>N'hésitez pas à parler à un professionnel pour vous faire écouter</p>
        </div>

        <div class="buttons">
          <router-link to="/" class="back2site" >Retourner au site</router-link>
        </div>

      </div>
      
    </section>


  </div>
</template>

<style scoped>

.quiz-header {
    background: linear-gradient(90deg, #3454D1 0%, #9BB0FF 100%);
    position: relative;
    inset: auto;
    text-align: left;
    padding: 3rem 0 3rem 5rem;
    color: white;
    margin-bottom: 5rem;
  }

  .progress-bar-cont {
    position: absolute;
    text-align: end;
    inset: 100% 0 0;
    color: #282D2D;
    height: 8px;
    background-color: #FFA1A1;
    transition: width .5s ease-in-out;

      & .progress-bar {
        inset: 100% 0 auto;
      }

      & p {
        padding-right: .5rem;
        margin: 10px 0 0;
        font-size: 16px;
        color: #3454D1;
        font-weight: 700;
      }

    }

    h2 {
      font-size: 30px;
    }

    .quiz-ctn {
      
      display: flex;
      flex-direction: column;
      margin-bottom: 22rem;
      
        & .quiz {

        margin-top: 5rem;
        align-self: center;
        background-color: #3454D1;
        border-radius: 15px;
        width: 740px;
        padding: 2.5rem 10rem;
        position: relative;
        
        
        & .quiz-playing, & .quiz-ended {
          
          color: white;
          min-height: 300px;
          padding: 2rem;
          position: relative;
          overflow: clip;

        }

        & .question {
          font-size: 20px;
          font-weight: 600;
        }

        & .options {
          font-size: 20px;

          & .option {
            display: flex;
            margin-block: 2rem;
            padding: 1rem 1.5rem;
            color: #282D2D;
            background-color: rgba(255, 255, 255, .7);
            border-radius: 5px;
            cursor: pointer;

            & input {
              display: none;
            }

            &:hover:not(.option-selected) {
              opacity: .8;
            }

            &.option-selected {
              outline: white solid 1px;
              outline-offset: 2px;
            }

          }

        }

        & .buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          align-items: center;

          & button, & a {
            color: white;
            padding: .5rem 1.5rem;
            border: white solid 1px;
            border-radius: 10px;
          }
        }

      }

    }

    .guillemet {
      position: absolute;
      z-index: 5;

      &.guillemet-1 {
        inset: -8rem auto auto -12rem;
      }

      &.guillemet-2 {
        inset: auto -15rem -5rem auto;
      }

    }

    .quiz-ended {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      & > .result {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }

</style>