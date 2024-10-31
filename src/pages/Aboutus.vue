<template>
    <v-app>
      <!-- Navbar -->
      <Navbar />
  
      <!-- Contenido principal -->
      <v-main>
        <!-- Sección Sobre Nosotros -->
        <About />
  
        <!-- Sección Qué Hacemos -->
        <Whatwedo />
  
        <!-- Sección de Footer -->
        <Footers />
      </v-main>
    </v-app>
  </template>
  
  <script setup>
  import Navbar from '@/components/Navbar.vue';
  import About from '@/components/About.vue'; // Componente para la sección "Sobre Nosotros"
  import Whatwedo from '@/components/Whatwedo.vue'; // Componente para la sección "Qué Hacemos"
  import Footers from '@/components/Footer.vue'; // Importa el componente de Footer
  </script>
  
  <style scoped>
  
  /* Este CSS extra es para prevenir el desplazamiento lateral en móviles */
  html, body, .v-application {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden; /* Prevenir desbordamiento horizontal */
  }
  
  </style>
  