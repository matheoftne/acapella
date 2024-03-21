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

        <h3>Bravo, vous avez terminé le quiz</h3>
        <p>Points harcelé : {{ finalScore.victimScore }}</p>
        <p>Points harceleur : {{ finalScore.offenderScore }}</p>
        <p>Points témoin : {{ finalScore.witnessScore }}</p>
        <p>Vous avez répondu à {{ questions.length }} questions</p>

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
    color: black;
    height: 8px;
    background-color: #FFA1A1;
    transition: width .5s ease-in-out;
    width: 50%;

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
      margin-bottom: 5rem;
    }

    .quiz-ctn {
      
      display: flex;
      flex-direction: column;
      margin-bottom: 22rem;
      
        & .quiz {

        align-self: center;
        background-color: #3454D1;
        border-radius: 15px;
        width: 740px;
        padding: 2.5rem 10rem;
        
        
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
            color: black;
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

          & button {
            padding: .5rem 1.5rem;
            border: white solid 1px;
            border-radius: 10px;
          }
        }

      }

    }
</style>