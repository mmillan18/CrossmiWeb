<template>
  <v-app>
    <!-- Navbar fijo siempre visible -->
    <Navbar />

    <!-- Carrusel de imágenes -->
    <v-carousel
      v-model="currentSlide"
      :cycle="true"
      :interval="interval"
      hide-delimiters
      class="carousel-container"
      @change="resetTimer"
    >
      <v-carousel-item
        v-for="(image, index) in images"
        :key="index"
        :src="image.src"
      >
        <v-container class="fill-height d-flex align-center justify-center">
          <div class="caption text-center">
            <h2>{{ image.caption }}</h2>
          </div>
        </v-container>
      </v-carousel-item>

      <!-- Botones de navegación personalizados -->
      <template #prev>
        <v-btn icon @click="goToPrev">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </template>
      <template #next>
        <v-btn icon @click="goToNext">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </template>
    </v-carousel>
  </v-app>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Navbar from '@/components/Navbar.vue'; // Importar el componente Navbar

const images = [
  { src: new URL('@/assets/image1-min.jpeg', import.meta.url).href, caption: 'De nuestros campos a tu taza' },
  { src: new URL('@/assets/image2-min.jpeg', import.meta.url).href, caption: 'Cultivamos con amor' },
  { src: new URL('@/assets/image3-min.jpeg', import.meta.url).href, caption: 'Calidad en cada grano' },
  { src: new URL('@/assets/image4-min.jpeg', import.meta.url).href, caption: 'Del campo a tu mesa' },
];

const currentSlide = ref(0);
const interval = ref(6000);
let slideTimer;

function goToNext() {
  currentSlide.value = (currentSlide.value + 1) % images.length;
  resetTimer();
}

function goToPrev() {
  currentSlide.value = (currentSlide.value - 1 + images.length) % images.length;
  resetTimer();
}

function resetTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(goToNext, interval.value);
}

onMounted(() => {
  slideTimer = setInterval(goToNext, interval.value);
});

onBeforeUnmount(() => {
  clearInterval(slideTimer);
});
</script>

<style scoped>
.carousel-container {
  height: 80vh;
}

.caption h2 {
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  font-size: 2.5rem;
}

.v-carousel__prev, .v-carousel__next {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 48px;
  height: 48px;
}

.v-carousel__prev:hover, .v-carousel__next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
