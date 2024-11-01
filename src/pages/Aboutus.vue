<template>
  <v-app>
    <!-- Navbar -->
    <Navbar @languageChanged="setLanguage" />

    <!-- Contenido principal -->
    <v-main>
      <!-- Sección Sobre Nosotros -->
      <About :selectedLanguage="selectedLanguage" />

      <!-- Sección Qué Hacemos -->
      <Whatwedo :selectedLanguage="selectedLanguage"/>

      <!-- Sección de Footer -->
      <Footers :selectedLanguage="selectedLanguage"/>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '@/components/Navbar.vue';
import About from '@/components/About.vue'; // Componente para la sección "Sobre Nosotros"
import Whatwedo from '@/components/Whatwedo.vue'; // Componente para la sección "Qué Hacemos"
import Footers from '@/components/Footer.vue'; // Importa el componente de Footer

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
  overflow-x: hidden; /* Prevenir desbordamiento horizontal */
}
</style>
