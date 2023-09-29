import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import mainpage from '../views/mainpage.vue'
import Newcard  from '../components/NewsCard.vue'


import ANewcard_1 from '../components/A-NewsCard1.vue';
import ANewcard_2 from '../components/A-NewsCard2.vue';
import ANewcard_3 from '../components/A-NewsCard3.vue';
import ANewcard_4 from '../components/A-NewsCard4.vue';
import ANewcard_5 from '../components/A-NewsCard5.vue';
import ANewcard_6 from '../components/A-NewsCard6.vue';

const shopRoutes = [
  { name: 'news_1', component: ANewcard_1, shop: 'Hookrajong Cafe' },
  { name: 'news_2', component: ANewcard_2, shop: 'Portobello & Désiré Cafe' },
  { name: 'news_3', component: ANewcard_3, shop: 'Wood Cafe'},
  { name: 'news_4', component: ANewcard_4, shop: 'The Blooming Gallery'},
  { name: 'news_5', component: ANewcard_5, shop: 'The 66 Cottage'},
  { name: 'news_6', component: ANewcard_6, shop: 'Hey! Coffee'},
];


const routes = [
  {
    path: '/',
    name: 'main',
    component: mainpage
  },
  {
    path: '/news',
    name: 'allnews',
    component: Newcard
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  }
];

shopRoutes.forEach((route) => {
  routes.push({
    path: `/news/${encodeURIComponent(route.shop)}`,
    name: route.name,
    component: route.component,
    props: true
  });
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export default router
