import { App } from 'vue';  // Importa el tipo 'App'
import router from '../router';
import i18n from '../i18n';  // Solo si usas i18n

export function registerPlugins(app: App) {  // Especifica el tipo 'App' para el parámetro 'app'
  app.use(router);
  
  if (i18n) {
    app.use(i18n);  // Solo si estás usando i18n
  }
}
