// src/main.ts

import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'; // Importa Vuetify
import { registerPlugins } from './plugins/registerPlugins'; // Asegúrate de tener otros plugins como router

const app = createApp(App);

registerPlugins(app); // Registra otros plugins
app.use(vuetify); // Asegúrate de usar Vuetify

app.mount('#app');
