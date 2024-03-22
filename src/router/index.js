import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ChatPro from '../components/Chat/Conversation.vue';
import Quiz from '../components/Quiz.vue';
import NotFound from '../views/NotFound.vue';
import Blog from '../components/Blog.vue';
import TalkAboutIt from '../components/TalkAboutIt.vue';
import Article from '../components/Article.vue';
import APropos from '../views/APropos.vue';
import Contact from '../views/Contact.vue';

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
        name: 'Parlons-en',
        path: '/parlons-en',
        component: TalkAboutIt,
        meta: {
            title: 'Parlons-en'
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
        path: '/a-propos',
        component: APropos,
        meta: {
            title: 'A Propos'
        }
    }, {
        name: 'Contact',
        path: '/contact',
        component: Contact,
        meta: {
            title: 'Contact'
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