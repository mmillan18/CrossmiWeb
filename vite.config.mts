import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import { fileURLToPath, URL } from 'node:url';
import Components from 'unplugin-vue-components/vite';
import VueRouter from 'unplugin-vue-router/vite';
import ViteFonts from 'unplugin-fonts/vite';

export default defineConfig({
  plugins: [
    vue(),
    VueRouter(),
    vuetify({
      autoImport: true,
    }),
    Components({
      dirs: ['src/components'],
      dts: true,
    }),
    ViteFonts({
      google: {
        families: [
          {
            name: 'Nunito',
            styles: 'wght@100;300;400;500;700;900',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
});
