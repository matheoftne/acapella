<script>
import { db, auth } from '../../firebase.js';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { onSnapshot, collection, doc, deleteDoc, setDoc, addDoc, orderBy, query } from 'firebase/firestore';
import { ref, onUnmounted } from 'vue';

import Message from './Message.vue';

export default {
  name: 'Conversation',
  components: {
    Message
  },

  data: () => {
    return {
      chats:ref([]),
      openedMessages:ref([]),
      openedMessageId: null,
      loggedIn: false,
      title: "",
      colors: [
        "#FFC8E9",
        "#DEFFBD",
        "#DEDCFF",
        "#FFD09A",
        "#FDFF9A",
        "#FFB6C1",
        "#C8E6C9",
        "#D3D3D3",
        "#FFA07A ",
        "#FFE4B5",
        "#B0E0E6",
        "#FFDAB9",
        "#D8BFD8"
      ]
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
        this.openedMessageId = null;
      } else {
        this.openedMessageId = chat.id;
        this.markAsRead(chat);
      }
    },
    markAsRead: function(chat) {
      if (!chat.seen) {
        chat.seen = true;
        const chatRef = doc(db, 'chats', chat.id);
        setDoc(chatRef, { seen: true }, { merge: true });
      }
    },
    getUserInitial(uid) {
      return uid.charAt(0).toUpperCase();
    }
  },

  mounted() {
    const loginListener = auth.onAuthStateChanged((user)=>{
      if ( user != null ) {
        this.loggedIn = true;
        this.title = ""
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
  <div v-if="loggedIn" class="ChatContainer pad-base">
    <div class="UserChatContainer">
      <div v-for="(chat, index) in chats" class="UserChatItems">
        <div :style="{ backgroundColor: colors[index % colors.length] }" class="ppContainer">
          <span>{{ getUserInitial(chat.id) }}</span>
        </div>
        <div @click="toggleMessage(chat)" class="btnChat">
          <div>
            <span :class="chat.seen ? 'btn-secondary' : 'btn-primary' "><i class="fa-solid fa-circle"></i></span>
            <strong style="font-size: 1.2em;"> Anonyme</strong> <br class="brChat">
            <p style="margin: 0; font-size: 0.9em; text-wrap: wrap">{{ chat.id }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="MessageContainer">
      <div v-for="message in chats">
      <div v-if="openedMessageId && message.id === openedMessageId">
        <message :client="message"></message>
      </div>
    </div>
  </div>
  </div>
  <div v-else>
    <button @click="login">login</button>
  </div>
</template>

<style scoped>
.btnChat {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.btn-primary {
  color: #007bff;
}

.btn-secondary {
  color: #6c757d;
}

.brChat {
  margin: 5em;
}
.ppContainer {
  width: 3em;
  height: 3em;
  border-radius: 2em;
  aspect-ratio: 1 / 1;
}

.ppContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.ppContainer span {
  font-size: 1.5em;
  font-weight: bold;
}

.ChatContainer {
  display: grid;
  grid-template-columns: 1fr 3fr;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  height: 79vh;
  overflow: hidden;
  position: relative;
}

.titleMessageContainer {
  width: 10em;
  text-align: left;
}

.UserChatContainer {
  background-color: #fff;
  color: #000;
  text-align: left;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 80vh;
  scrollbar-width: none;
}

.UserChatItems {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1em;
  margin: 1em;
}

</style>