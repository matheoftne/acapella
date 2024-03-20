<script>
import { db, auth } from '../../firebase.js';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
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
      openedMessages:ref([]),
      openedMessageId: null,
      loggedIn: false,
      title: ""
    }
  },

  methods : {
    login: function() {
      signInWithPopup(auth, new GoogleAuthProvider());
    },
    logout: function() {
      signOut(auth);
    },
    toggleMessage: function(chat) {
      if(this.openedMessageId === chat.id) {
        this.openedMessageId = null; // Fermer la conversation si elle est déjà ouverte
      } else {
        this.openedMessageId = chat.id; // Ouvrir la conversation sélectionnée
        this.markAsRead(chat); // Marquer comme lu
      }
    },
    markAsRead: function(chat) {
      if (!chat.seen) {
        chat.seen = true; // Marquer le chat comme lu
        const chatRef = doc(db, 'chats', chat.id);
        setDoc(chatRef, { seen: true }, { merge: true }); // Mise à jour dans Firestore
      }
    }
  },

  mounted() {
    const loginListener = auth.onAuthStateChanged((user)=>{
      if ( user != null ) {
        this.loggedIn = true;
        this.title = "welcome"
        const chatSnapshot = onSnapshot(
          query(collection(db, 'chats'), orderBy('date', 'desc')),

          (snapshot) => {
            this.chats = snapshot.docs.map( (doc) => {
              return {... doc.data(), id: doc.id}
            })
          },
          (error) => {
            if (this.loggedIn && error.code.includes("permissions")) {
              {
                this.title = "you are not admin !";
              }
            }
          }
        );
        onUnmounted(chatSnapshot);
      } else {
        this.loggedIn = false;
        this.title = "please login"
      }
    });
  }
}


</script>

<template>
  <h1>{{ title }}</h1>
  <div v-if="loggedIn">
    <div class="ChatContainer">
    <div class="chatsContainer">
      <h1>Chat</h1>
      <div v-for="chat in chats">
        <div @click="toggleMessage(chat)" class="btn" :class="chat.seen ? 'btn-secondary' : 'btn-primary' ">
          <p>{{ chat.id }} : <strong>{{ chat.latestMessage }}</strong></p>
        </div>
      </div>
    </div>
    <div v-for="message in chats">
      <div v-if="openedMessageId && message.id === openedMessageId">
        <message :client="message"></message>
      </div>
    </div>
    <button @click="logout">logout</button>
  </div>
  </div>
  <div v-else>
    <button @click="login">login</button>
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