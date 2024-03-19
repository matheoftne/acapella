<script>
import { db } from '../../firebase.js';
import { onSnapshot, collection, doc, deleteDoc, setDoc, addDoc, orderBy, query } from 'firebase/firestore';
import { ref, onUnmounted } from 'vue';

import Message from './Message.vue';

export default {
  name: 'Chat',
  components: {
    Message
  },

  data: () => {
    return {
      chats:ref([]),
      openedMessages:ref([])
    }
  },

  mounted() {
    const chatSnapshot = onSnapshot(
      query(collection(db, 'chats'), orderBy('date', 'desc')),

      (snapshot) => {
        this.chats = snapshot.docs.map( (doc) => {
          return {... doc.data(), id: doc.id}
        })
      }
    );
    onUnmounted(chatSnapshot);
  }
}


</script>

<template>
  <div class="ChatContainer">
    <div class="chatsContainer">
      <h1>Chat</h1>
      <div v-for="chat in chats">
        <div @click="openedMessages.push(chat)" class="btn" :class="chat.seen ? 'btn-secondary' : 'btn-primary' ">
          <p>{{ chat.name }} : <strong>{{ chat.latestMessage }}</strong></p>
        </div>
      </div>
    </div>
    <div v-for="message in openedMessages">
      <message :client="message"></message>
    </div>
  </div>
</template>

<style scoped>
  .ChatContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .chatsContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .chatsContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .btn {
    margin: 10px;
    padding: 10px;
    width: 10em;
    border-radius: 10px;
    cursor: pointer;
  }

  .btn-primary {
    background-color: lightskyblue;
    color: white;
  }

  .btn-secondary {
    background-color: grey;
    color: white;
  }
</style>