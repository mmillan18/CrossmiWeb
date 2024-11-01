<template>
  <v-app>
    <!-- Navbar -->
    <Navbar @languageChanged="setLanguage" />

    <!-- Carrusel y Secciones -->
    <v-main>
      <!-- Carrusel -->
      <Carousel :selectedLanguage="selectedLanguage" /> <!-- Pasa el idioma al componente Carousel -->

      <!-- Línea divisora y sección de logos -->
      <LogosSection :selectedLanguage="selectedLanguage" /> <!-- Pasa el idioma a LogosSection -->

      <!-- Sección de productos HomeProductsCoffee -->
      <HomeProductsCoffee :selectedLanguage="selectedLanguage" />

      <!-- Sección de productos HomeProductsCacao -->
      <HomeProductsCacao :selectedLanguage="selectedLanguage" />

      <!-- Sección de Footer -->
      <Footers  :selectedLanguage="selectedLanguage"/>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import Navbar from '@/components/Navbar.vue';
import Carousel from '@/components/Carousel.vue';
import LogosSection from '@/components/LogosSection.vue';
import HomeProductsCoffee from '@/components/HomeProductsCoffee.vue';
import HomeProductsCacao from '@/components/HomeProductsCacao.vue';
import Footers from '@/components/Footer.vue';

// Estado reactivo para el idioma seleccionado
const selectedLanguage = ref('es'); // Valor predeterminado

// Función para actualizar el idioma y guardarlo en localStorage
function setLanguage(lang) {
  selectedLanguage.value = lang;
  localStorage.setItem('selectedLanguage', lang); // Guardar idioma en localStorage
}

// Al montar el componente, revisar si hay un idioma guardado en localStorage
onMounted(() => {
  const savedLanguage = localStorage.getItem('selectedLanguage');
  if (savedLanguage) {
    selectedLanguage.value = savedLanguage; // Usar el idioma guardado si existe
  }
});
</script>

<style scoped>
/* Este CSS extra es para prevenir el desplazamiento lateral en móviles */
html, body, .v-application {
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
}
</style>
