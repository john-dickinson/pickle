import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
import Main from '@/components/Main';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Design from '@/components/Design';
import Prints from '@/components/Prints';
import Illustrations from '@/components/Illustrations';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/illustrations',
      name: 'Illustrations',
      component: Illustrations,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/design',
      name: 'Design',
      component: Design,
    },
    {
      path: '/prints',
      name: 'Prints',
      component: Prints,
    },
  ],
});
