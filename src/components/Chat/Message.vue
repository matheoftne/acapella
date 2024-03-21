<script>
import { db, auth } from '../../firebase.js';
import { signOut } from 'firebase/auth';
import { onSnapshot, collection, doc, deleteDoc, setDoc, addDoc, orderBy, query } from 'firebase/firestore';
import { ref, onUnmounted } from 'vue';

export default {
    props: {
        client:Object
    },
    data:() => {
        return {
            messages:ref([])
        }
    },

    methods: {
        sendMessage: function() {
            addDoc(collection(db, 'chats/' + this.client.id + '/messages'),
        {
            text: this.$refs.newMessage.value,
            admin: true,
            date: Date.now()
        }
        )
        let updateLatestMessage = {...this.client, latestMessage: this.$refs.newMessage.value}
        delete updateLatestMessage.id;
        setDoc(doc(db, 'chats/' + this.client.id), updateLatestMessage);
        this.$refs.newMessage.value = '';
        },
        logout: function() {
            signOut(auth);
        },
    },

    mounted() {
        let updateSeen = {...this.client, seen: true}
        delete updateSeen.id;
        setDoc(doc(db, 'chats/' + this.client.id), updateSeen);
        this.client.seen = true;

        const messages = onSnapshot(
            query(collection(db, 'chats/' + this?.client.id + '/messages'),orderBy('date', 'desc')),

            (snapshot) => {
                this.messages = snapshot.docs.map((doc) => {
                    return {...doc.data(), id:doc.id}
                })
            }
        );
        onUnmounted(messages)
    }
}
</script>

<template>
    <div class="chatbox">
        <div v-for="message in messages" class="messageContainer">
            <div class="messageItems" :class="message.admin ? 'admin': 'client'">
                {{ message.text }}
            </div>
        </div>
    </div>
    <div class="inputTextContainer">
        <span style="margin-left: 2em;"><i class="fa-regular fa-face-smile btnChatText"></i></span>
        <input class="inputChat" type="text" @keypress.enter="sendMessage" ref="newMessage" placeholder="Ecrire un message ...">
        <button @click="sendMessage" class="btn btn-primary btnChatText"><i class="fa-solid fa-paper-plane"></i></button>
        <button @click="logout" class="btnChatText"><i class="fa-solid fa-arrow-right-from-bracket"></i></button>
    </div>
</template>

<style>
.btnChatText {
    background: none;
    color: #000;
}

.btnChatText:hover {
    color: #3454D1;
    background: none;
}

.inputChat {
    border: none;
    background: none;
    width: 45vw;
    font-size: 1.2em;
}

.inputChat:focus {
    outline: none;
}

.inputTextContainer {
    position: absolute;
    z-index: 2;
    inset: auto 15% 2%;
    display: flex;
    gap: 1em;
    align-items: center;
    border: 1px solid #B0B0B0;
    background: rgba(255, 255, 255, 0.20);
    backdrop-filter: blur(11.699999809265137px);
    border-radius: 20px;
}

.MessageContainer {
    position: relative;
}

.messageContainer:first-child {
    margin-bottom: 5em;
}

.chatbox {
    height: 80vh;
    overflow: scroll;
    flex-direction: column-reverse;
    background-color: #DEDCFF;
    border-radius: 5px;
    display: flex;
    color: black;
    scrollbar-width: none;
}

.chatbox > div {
    display: flex;
    flex-direction: column;
}

.chatbox > div > div {
    padding: 0.8rem;
    margin: 0.5rem 1em;
    text-align: left;
    max-width: fit-content;
    width: 40vw;
    word-wrap: break-word;
}

.client {
    align-self: start;
    background-color: #fff;
    border-radius: 4px 4px 4px 0;
}

.admin {
    align-self: end;
    background-color: #3454D1;
    color: #fff;
    border-radius: 4px 4px 0 4px;
}
</style>