import { createApp } from 'vue'
import Particles from "vue3-particles";
import App from './App.vue'
import router from './router';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'animate.css';

createApp(App)
    .use(router)
    .use(Particles)
    .mount('#app');
