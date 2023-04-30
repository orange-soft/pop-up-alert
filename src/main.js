import {createApp} from 'vue';
import {createPinia} from 'pinia';
import App from './App.vue';

import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/brands.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import './assets/app.css';
import './assets/main.css';

const app = createApp(App);

app.use(createPinia());

app.mount('#app');
