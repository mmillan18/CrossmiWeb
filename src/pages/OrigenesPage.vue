<!-- OrigenesPage.vue -->
<template>
    <v-app>
      <!-- Navbar -->
      <Navbar />
  
      <!-- Contenido de Origenes -->
      <v-main>
        <Origins />
      </v-main>
  
      <!-- Footer -->
      <Footers />
    </v-app>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  import Origins from '@/components/Origins.vue';
  import Footers from '@/components/Footer.vue';
  
  export default {
    components: {
      Navbar,
      Origins,
      Footers,
    },
  };
  </script>
  
  <style scoped>
  /* Prevenir desplazamiento horizontal */
  html, body, .v-application {
    max-width: 100vw;
    overflow-x: hidden;
  }
  </style>
  