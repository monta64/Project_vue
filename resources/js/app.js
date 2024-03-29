import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import router from './routes';


const app = createApp(App).use(router)

app.mount('#app')

app.config.globalProperties.axios=axios