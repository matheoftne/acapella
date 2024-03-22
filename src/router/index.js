import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ChatPro from '../components/Chat/Conversation.vue';
import Quiz from '../components/Quiz.vue';
import NotFound from '../views/NotFound.vue';
import Blog from '../components/Blog.vue';
import Article from '../components/Article.vue';
import APropos from '../views/APropos.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
        meta: {
            title: 'Home'
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
    }, {
        name: 'Blog',
        path: '/blog',
        component: Blog,
        meta: {
            title: 'Blog'
        }
    }, {
        name: 'Article',
        path: '/article',
        component: Article,
        meta: {
            title: 'Article'
        }
    }, {
        name: 'A Propos',
        path: '/apropos',
        component: APropos,
        meta: {
            title: 'A Propos'
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