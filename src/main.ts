// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'; // Asegúrate de que la ruta es correcta
import { registerPlugins } from './plugins/registerPlugins'; // Registra router, i18n y otros plugins

const app = createApp(App);

registerPlugins(app); // Llama a la función para registrar todos los plugins
app.use(vuetify); // Agrega Vuetify

app.mount('#app'); // Monta la aplicación en el div con id 'app'
