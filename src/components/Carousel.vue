<template>
  <v-carousel
    :show-arrows="false"
    :interval="interval"
    hide-delimiter-background="false"
    cycle  
  >
    <v-carousel-item
      v-for="(image, index) in images"
      :key="index"
      :src="image.src"
      cover
    >
      <v-container class="fill-height d-flex align-center justify-end">
        <!-- Contenedor de la leyenda y el logo -->
        <div class="caption">
          <v-img
            src="/src/assets/frutos-min.png" 
            max-width="50"
            max-height="50"
            class="mr-2"
            alt="Logo"
          />
          <h2 class="caption-text">{{ getCaptionTranslation(index) }}</h2>
        </div>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: ['selectedLanguage'], // Recibe el idioma seleccionado desde el componente padre
  data() {
    return {
      interval: 4000,  // Tiempo de intervalo en milisegundos (4 segundos)
      images: [
        { src: new URL('@/assets/image1-min.jpeg', import.meta.url).href, captionKey: 'authenticFlavors' },
        { src: new URL('@/assets/image2-min.jpeg', import.meta.url).href, captionKey: 'cultivateWithLove' },
        { src: new URL('@/assets/image3-min.jpeg', import.meta.url).href, captionKey: 'qualityInEachBean' }
      ],
      translations: {
        es: {
          authenticFlavors: 'Sabores auténticos',
          cultivateWithLove: 'Cultivamos con amor',
          qualityInEachBean: 'Calidad en cada grano'
        },
        en: {
          authenticFlavors: 'Authentic Flavors',
          cultivateWithLove: 'We Cultivate with Love',
          qualityInEachBean: 'Quality in Every Bean'
        }
      }
    };
  },
  methods: {
    getCaptionTranslation(index) {
      const key = this.images[index].captionKey;
      return this.translations[this.selectedLanguage][key];
    }
  }
};
</script>

<style scoped>
.fill-height {
  height: 100%;
  width: 100%;
}

/* La leyenda no debe tapar los puntos de navegación */
.caption {
  position: absolute;
  bottom: 50px; /* Posiciona la leyenda justo por encima de los puntos */
  right: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center; /* Alinea el logo y el texto horizontalmente */
}

.caption-text {
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  font-size: 1.8rem;
}

@media (min-width: 600px) {
  .caption-text {
    font-size: 2.5rem;
  }
}

/* Ajuste de los puntos de navegación (circulitos) */
.v-window__controls {
  bottom: 15px !important;
}

.v-window__controls button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #fff;
}

/* Ocultar cualquier flecha sobrante */
.v-carousel__prev, .v-carousel__next {
  display: none;
}
</style>
