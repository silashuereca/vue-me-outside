import { createApp } from 'vue'
import { router } from './my-routes.js';
import App from './App.vue'
import './index.css'

const app = createApp(App)
	.use(router)
	.mount('#app')

