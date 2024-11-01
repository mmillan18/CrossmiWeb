// src/plugins/registerPlugins.ts
import { App } from 'vue';  // Importa el tipo 'App'
import router from '../router';  // Asegúrate de que '../router' sea la ruta correcta
import i18n from '../i18n';  // Solo si estás usando i18n

export function registerPlugins(app: App) {
  app.use(router);

  // Usa i18n solo si está definido
  if (i18n) {
    app.use(i18n);
  }
}
