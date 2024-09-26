import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import App from './App.vue';

const APP = createApp(App);

const pinia = createPinia();

APP.use(pinia);
APP.use(ElementPlus);

APP.mount('#app');
