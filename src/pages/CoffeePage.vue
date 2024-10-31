<template>
    <v-app>
      <!-- Navbar -->
      <Navbar />
  
      <!-- Contenido de Productos de Café -->
      <v-main>
        <CoffeeProducts />
      </v-main>
  
      <!-- Footer -->
      <Footers />
    </v-app>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  import CoffeeProducts from '@/components/CoffeeProducts.vue';
  import Footers from '@/components/Footer.vue';
  
  export default {
    components: {
      Navbar,
      CoffeeProducts,
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
  