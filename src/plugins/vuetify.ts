// src/plugins/vuetify.ts

import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Importa los estilos globales de Vuetify
import { aliases, mdi } from 'vuetify/iconsets/mdi'; // Opcional, si usas iconos de Material Design

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#faf5e2', // Color principal
          secondary: '#663f3f', // Color secundario
          accent: '#f77a3b', // Color de acento
        },
      },
    },
  },
});
