<!-- OrigenesPage.vue -->
<template>
    <v-app>
      <!-- Navbar -->
      <Navbar />
  
      <!-- Contenido de Origenes -->
      <v-main>
        <CocoaProducts />
      </v-main>
  
      <!-- Footer -->
      <Footers />
    </v-app>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  import Footers from '@/components/Footer.vue';
  import CocoaProducts from '@/components/CocoaProducts.vue';
  
  export default {
    components: {
      Navbar,
      CocoaProducts,
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
  