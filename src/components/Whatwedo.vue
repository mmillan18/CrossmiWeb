<template>
  <v-container fluid class="what-we-do-section">
    <v-row justify="center" class="align-center">
      <!-- Imagen decorativa en la esquina inferior izquierda -->
      <v-img :src="cornerImage" :alt="getTranslation('altImage')" class="corner-image" />

      <!-- Sección de texto a la izquierda con fondo naranja claro -->
      <v-col cols="12" md="5" class="text-section">
        <div class="text-box">
          <h2 class="section-title">{{ getTranslation('title') }}</h2>
          <p class="section-description">
            {{ getTranslation('description') }}
          </p>
        </div>
      </v-col>

      <!-- Sección de imagen a la derecha -->
      <v-col cols="12" md="5" class="image-section">
        <v-img :src="whatWeDoImage" :alt="getTranslation('altImage')" class="what-we-do-image" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['selectedLanguage'], // Recibe el idioma seleccionado desde el componente padre
  data() {
    return {
      whatWeDoImage: new URL('@/assets/image6-min.jpeg', import.meta.url).href, // Imagen principal de "Qué Hacemos"
      cornerImage: new URL('@/assets/esq4-min.png', import.meta.url).href, // Imagen decorativa en la esquina inferior izquierda
      translations: {
        es: {
          title: "Qué Hacemos",
          altImage: "Qué Hacemos",
          description:
            "En CROSSMI y FRUTOSEVERGREEN, seleccionamos cuidadosamente el mejor café y cacao colombiano directamente de las regiones más prestigiosas. Implementamos rigurosos controles de calidad, facilitamos el proceso de exportación y promovemos prácticas agrícolas sostenibles. Nos esforzamos por conectar a los amantes del café y el cacao de todo el mundo con la esencia auténtica de Colombia, ofreciendo productos que reflejan nuestra dedicación a la calidad y la sostenibilidad."
        },
        en: {
          title: "What We Do",
          altImage: "What We Do",
          description:
            "At CROSSMI and FRUTOSEVERGREEN, we carefully select the best Colombian coffee and cocoa directly from the most prestigious regions. We implement rigorous quality controls, facilitate the export process, and promote sustainable farming practices. We strive to connect coffee and cocoa lovers worldwide with the authentic essence of Colombia, offering products that reflect our commitment to quality and sustainability."
        }
      }
    };
  },
  methods: {
    getTranslation(key) {
      // Devuelve la traducción en el idioma seleccionado o en español por defecto
      const language = this.selectedLanguage in this.translations ? this.selectedLanguage : 'es';
      return this.translations[language][key];
    }
  }
};
</script>

<style scoped>
.what-we-do-section {
  background-color: #fdf7e2; /* Color de fondo claro */
  padding: 40px 20px;
  position: relative; /* Para posicionar la imagen de la esquina */
}

.text-section {
  display: flex;
  justify-content: center;
}

.text-box {
  background-color: #ffe0b2; /* Fondo naranja claro */
  border-radius: 12px; /* Bordes redondeados */
  padding: 20px; /* Espaciado interno */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para darle un poco de profundidad */
  color: #663f3f;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.section-description {
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: justify; /* Justificar el texto */
}

.image-section {
  display: flex;
  justify-content: center;
}

.what-we-do-image {
  border-radius: 8px;
  width: 100%;
  max-width: 400px; /* Ajusta el tamaño máximo de la imagen */
  height: auto;
}

/* Estilo de la imagen decorativa en la esquina inferior izquierda */
.corner-image {
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 200px; /* Ajusta el tamaño de la imagen */
  height: auto;
  z-index: 1; /* Asegura que la imagen esté encima del fondo */
  opacity: 0.9;
}

/* Responsividad */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .section-description {
    font-size: 1rem;
  }

  .corner-image {
    width: 80px; /* Tamaño reducido en pantallas pequeñas */
    bottom: 5px;
    left: 5px;
  }
}
</style>
