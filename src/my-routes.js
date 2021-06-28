import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import InputPage from './pages/Input.vue';
import PricingPage from './pages/PricingPage.vue';

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', name: 'home-page', component: Home },
		{ path: '/input', name: 'input-page', component: InputPage },
		{ path: '/pricing-page', name: 'pricing-page', component: PricingPage}
	]
})