<template>
  <v-app>
    <!-- Navbar -->
    <Navbar/>

    <!-- Carrusel y Secciones -->
    <v-main>
      <!-- Carrusel -->
      <Carousel />

      <!-- Línea divisora y sección de logos -->
      <LogosSection />

      <!-- Sección de productos HomeProductsCoffee -->
      <HomeProductsCoffee />

      <!-- Sección de productos HomeProductsCacao -->
      <HomeProductsCacao />

      <!-- Sección de Footer -->
      <Footers />
    </v-main>
  </v-app>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Carousel from '@/components/Carousel.vue';
import LogosSection from '@/components/LogosSection.vue'; // Importa la sección de logos
import HomeProductsCoffee from '@/components/HomeProductsCoffee.vue'; // Importa el nuevo componente HomeProducts
import HomeProductsCacao from '@/components/HomeProductsCacao.vue'; // Importa el nuevo componente HomeProducts
import Footers from '@/components/Footer.vue';
</script>

<style scoped>

/* Este CSS extra es para prevenir el desplazamiento lateral en móviles */
html, body, .v-application {
  width: 100%;
  max-width: 100vw;
  max-width: 100vw; /* Limita el ancho máximo al ancho del viewport */
  overflow-x: hidden; /* Prevenir desbordamiento horizontal */
}


</style>
