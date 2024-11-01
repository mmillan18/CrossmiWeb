<template>
  <v-container fluid class="about-us-section">
    <v-row justify="center" class="align-center">
      <!-- Imagen de decoración en la esquina superior derecha -->
      <v-img :src="cornerImage" :alt="getTranslation('altImage')" class="corner-image" />

      <!-- Sección de imagen a la izquierda -->
      <v-col cols="12" md="5" class="image-section">
        <v-img :src="aboutImage" :alt="getTranslation('altImage')" class="about-image" />
      </v-col>

      <!-- Sección de texto a la derecha con fondo amarillo claro -->
      <v-col cols="12" md="5" class="text-section">
        <div class="text-box">
          <h2 class="section-title">{{ getTranslation('title') }}</h2>
          <p class="section-description">
            {{ getTranslation('description') }}
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['selectedLanguage'], // Recibe el idioma seleccionado desde el componente padre
  data() {
    return {
      aboutImage: new URL('@/assets/image5-min.JPG', import.meta.url).href,
      cornerImage: new URL('@/assets/esq2-min.png', import.meta.url).href, // Imagen decorativa
      translations: {
        es: {
          title: "Sobre Nosotros",
          altImage: "Sobre Nosotros",
          description:
            "En CROSSMI, una marca registrada de FRUTOSEVERGREEN, estamos dedicados a ofrecer al mundo el mejor café y cacao colombiano. Nuestra pasión por estos productos excepcionales nos impulsa a actuar como intermediarios comprometidos con la calidad, la sostenibilidad y la autenticidad. Trabajamos estrechamente con las comunidades productoras para asegurar que cada grano de café y cada vaina de cacao cumplan con los más altos estándares de excelencia."
        },
        en: {
          title: "About Us",
          altImage: "About Us",
          description:
            "At CROSSMI, a registered brand of FRUTOSEVERGREEN, we are dedicated to offering the world the finest Colombian coffee and cocoa. Our passion for these exceptional products drives us to act as intermediaries committed to quality, sustainability, and authenticity. We work closely with producing communities to ensure that every coffee bean and cocoa pod meets the highest standards of excellence."
        }
      }
    };
  },
  methods: {
    getTranslation(key) {
      // Asegurarse de devolver la traducción en el idioma seleccionado o en español si no está disponible
      const language = this.selectedLanguage in this.translations ? this.selectedLanguage : 'es';
      return this.translations[language][key];
    }
  }
};
</script>
<style scoped>
.about-us-section {
  background-color: #fdf7e2;
  padding: 40px 20px;
  position: relative; /* Para posicionar la imagen de la esquina */
}

.image-section {
  display: flex;
  justify-content: center;
}

.about-image {
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  height: auto;
}

.text-section {
  display: flex;
  justify-content: center;
}

.text-box {
  background-color: #fff3a5; /* Fondo amarillo claro */
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
  text-align: justify;
}

/* Estilo de la imagen de la esquina */
.corner-image {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 250px; /* Ajusta el tamaño de la imagen */
  height: auto;
  z-index: 5; /* Asegura que la imagen esté encima de otros elementos */
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
    top: 5px;
    right: 5px;
  }
}
</style>
