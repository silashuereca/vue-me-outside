import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import FormInput from './pages/FormInput.vue';

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', name: 'home-page', component: Home },
		{ path: '/form-input', name: 'input-page', component: FormInput },
	]
});