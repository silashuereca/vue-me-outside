import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import InputPage from './pages/Input.vue';
import SlidingCards from './pages/SlidingCards.vue';

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', name: 'home-page', component: Home },
		{ path: '/input', name: 'input-page', component: InputPage },
		{ path: '/sliding-cards', name: 'sliding-cards', component: SlidingCards }
	]
})