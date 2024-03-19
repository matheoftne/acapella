<script>
import { db } from '../../firebase.js';
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
    mounted() {const messages = onSnapshot(
        query(collection(db, '/chats/' + this?.client.id + '/messages')),

        orderBy('date', 'desc'),

        (snapshot) => {
            this.messages = snapshot.docs.map((doc) => {
                return {...doc.data(), id:doc.id}
            })
        }
    )}
}
</script>

<template>
    <div>chat with : {{ client.name }}</div>
    <div class="chatbox">
        <div v-for="message in messages">
            <div :class="message.admin ? 'admin': 'client'">
                {{ message.text }}
            </div>
        </div>
    </div>
</template>

<style>
.chatbox {
    height: 50vh;
    overflow: scroll;
    flex-direction: column-reverse;
    background-color: brown;
    border-radius: 5px;
    display: flex;
    color: black;
}

.chatbox > div {
    display: flex;
    flex-direction: column;
}

.chatbox > div > div {
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 4px;
}

.client {
    align-self: start;
    background-color: #fdff8f;
}

.admin {
    align-self: end;
    background-color: white;
}
</style>