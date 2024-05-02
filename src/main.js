import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './main.css'
import NAVBAR from './components/Navbar.vue'
import HomeView from './view/HomeView.vue'
import ProfileView from './view/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/profile', component: ProfileView }
  ]
})

createApp(App).use(router).component('NAVBAR', NAVBAR).mount('#app')
