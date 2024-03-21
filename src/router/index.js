import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ChatPro from '../components/Chat/Conversation.vue';
import Chat from '../views/Chat.vue';
import Quiz from '../components/Quiz.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
        meta: {
            title: 'Home'
        }
    }, {
        name: 'Chat',
        path: '/chat',
        component: Chat,
        meta: {
            title: 'Chat'
        }
    }, {
        name: 'Quiz',
        path: '/quiz',
        component: Quiz,
        meta: {
            title: 'Quiz'
        }
    }, {
        name: 'NotFound',
        path: '/:pathMatch(.*)*',
        component: NotFound,
        meta: {
            title: '404 Not Found'
        }
    }, {
        name: 'Chat Pro',
        path: '/chat-pro',
        component: ChatPro,
        meta: {
            title: 'Chat Pro'
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.afterEach(( to, from ) => {
    document.title = to.meta.title
})

export default router;