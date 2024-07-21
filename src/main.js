import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/HomeV.vue';
import Products from './views/ProductsV.vue';
import Cart from './views/CartV.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/productos', component: Products },
  { path: '/carrito', component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
