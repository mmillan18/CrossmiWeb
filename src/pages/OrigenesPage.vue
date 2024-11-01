<!-- OrigenesPage.vue -->
<template>
    <v-app>
      <!-- Navbar -->
      <Navbar @languageChanged="setLanguage" />
  
      <!-- Contenido de Origenes -->
      <v-main>
        <Origins :selectedLanguage="selectedLanguage" />
      </v-main>
  
      <!-- Footer -->
      <Footers :selectedLanguage="selectedLanguage"/>
    </v-app>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import Navbar from '@/components/Navbar.vue';
  import Origins from '@/components/Origins.vue';
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
  /* Prevenir desplazamiento horizontal */
  html, body, .v-application {
    max-width: 100vw;
    overflow-x: hidden;
  }
  </style>
  