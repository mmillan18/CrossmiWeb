<template>
  <v-container class="home-products-container" fluid>
    <!-- Línea divisora amarilla -->
    <div class="divider"></div>

    <!-- Imágenes en las esquinas -->
    <v-img :src="leftImage" alt="Café en la esquina izquierda" class="corner-img left" />
    <v-img :src="rightImage" alt="Cacao en la esquina derecha" class="corner-img right" />

    <!-- Texto centrado -->
    <v-row class="text-center justify-center">
      <v-col cols="12">
        <h2 class="main-title">Café de Calidad Premium: Una Experiencia de Lujo</h2>
        <p class="subtitle">Disfruta de los Sabores Más Exquisitos y Exclusivos</p>
      </v-col>
    </v-row>

    <!-- Carrusel de productos -->
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-carousel  hide-delimiter-background height="360" v-model="model" class="carrusel" cycle :show-arrows="false">
          <v-carousel-item v-for="(product, index) in products" :key="index">
            <v-card class="mx-auto card-with-shadow" outlined>
              <v-img :src="product.image" class="product-image" ></v-img>
              <v-card-title>{{ product.title }}</v-card-title>
              <v-card-subtitle>{{ product.description }}</v-card-subtitle>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <!-- Botón Cotizar Ahora -->
    <v-row justify="center">
      <v-col cols="12" class="text-center mt-4">
        <v-btn color="#f7d26a" @click="redirectToWhatsapp(product.title)">Cotizar Ahora</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeProducts',
  data() {
    return {
      model: 0, // Para controlar el carrusel
      leftImage: new URL('@/assets/esq1-min.png', import.meta.url).href,
      rightImage: new URL('@/assets/esq2-min.png', import.meta.url).href,
      products: [
        {
          image: new URL('@/assets/coffee1-min.png', import.meta.url).href,
        },
        {
          image: new URL('@/assets/coffee2-min.png', import.meta.url).href,
        },
        {
          image: new URL('@/assets/coffee3-min.png', import.meta.url).href,
        }
      ],
      // Valores responsivos para el carrusel
      carouselHeight: '140px',
      carouselImageHeight: '180px'
    };
  },
  mounted() {
    this.adjustCarouselHeight();
    window.addEventListener('resize', this.adjustCarouselHeight);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.adjustCarouselHeight);
  },
  methods: {
    redirectToWhatsapp(productName) {
      const url = `https://wa.me/573156299567?text=Hola,%20estoy%20interesado%20en%20el%20producto%20${encodeURIComponent(productName)}%20y%20me%20gustaría%20cotizarlo.`;
      window.open(url, '_blank');
    },
    adjustCarouselHeight() {
      if (window.innerWidth < 768) {
        // Cambiamos la altura del carrusel e imágenes en móviles
        
        this.carouselImageHeight = '200px';
      } else {
        // En pantallas grandes mantenemos los tamaños originales
        this.carouselHeight = '340px';
        this.carouselImageHeight = '280px';
      }
    }
  }
};
</script>

<style scoped>
/* Contenedor principal del componente */
.home-products-container {
  background-color: #fdf7e2;
  padding: 20px 20px;
  position: relative;
}

/* Línea divisora amarilla */
.divider {
  width: 70%;
  height: 10px;
  background-color: #f7d26a;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 0;
  margin-right: auto;
}

/* Imágenes de las esquinas */
.corner-img {
  position: absolute;
  width: 150px;
  height: auto;
}

.left {
  top: 40px;
  left: 0;
}

.right {
  top: 40px;
  right: 0;
}

/* Títulos */
.main-title {
  font-size: 2rem;
  font-weight: bold;
  color: #3d3d3d;
  margin-top: 50px;
  margin-bottom: 30px;
}

.subtitle {
  font-size: 1.2rem;
  color: #7a7a7a;
}

/* Estilo para el botón */
.v-btn {
  background-color: #f7d26a;
  color: #3d3d3d;
  font-size: 16px;
  margin-top: 5px;
}

/* Estilo con sombra para las tarjetas */
.card-with-shadow {
  border-radius: 12px;
  padding: 15px;
  background-color: #fff;
}

/* Imágenes en carrusel */
.product-image {
  width: 100%;
  object-fit: contain; /* Para que la imagen mantenga sus proporciones dentro del contenedor */
}

/* Responsividad */
@media (max-width: 768px) {
  .corner-img {
    width: 100px;
  }

  .main-title {
    font-size: 1.5rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  /* Ajustes para el carrusel y sus imágenes */
  .carrusel
  {
    height: 260px!important;
  }
  .product-image
  {
    max-height: 200px;
  }
  .home-products-container {
    padding: 5px;
  }

  .v-carousel-item {
    padding: 5px;
  }
}

</style>
