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
        <v-carousel class="coffee-carrousel" hide-delimiter-background="false" :show-arrows="false" v-model="model" cycle>
          <v-carousel-item v-for="(product, index) in products" :key="index">
            <v-card class="mx-auto card-with-shadow" outlined>
              <v-img :src="product.image" class="white--text coffee-carrousel-img"></v-img>
              <v-card-title >{{ product.title }}</v-card-title> <!-- Ocultar el título -->
              <v-card-subtitle >{{ product.description }}</v-card-subtitle> <!-- Ocultar la descripción -->
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <!-- Botón Cotizar Ahora -->
    <v-row justify="center">
      <v-col cols="12" class="text-center mt-4">
        <v-btn color="#f7d26a" @click="redirectToWhatsapp(products[model].whatsappName)">Cotizar Ahora</v-btn>
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
          whatsappName: "Pink Bourbon", // Nombre del producto para WhatsApp
        },
        {
          image: new URL('@/assets/coffee2-min.png', import.meta.url).href,
          whatsappName: "Geisha", // Nombre del producto para WhatsApp
        },
        {
          image: new URL('@/assets/coffee3-min.png', import.meta.url).href,
          whatsappName: "Blend", // Nombre del producto para WhatsApp
        }
      ]
    };
  },
  methods: {
    redirectToWhatsapp(productName) {
      const url = `https://wa.me/573156299567?text=Hola,%20estoy%20interesado%20en%20el%20producto%20${encodeURIComponent(productName)}%20y%20me%20gustaría%20cotizarlo.`;
      window.open(url, '_blank');
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
  margin-top: 20px;
}

/* Estilo con sombra para las tarjetas */
.card-with-shadow {
  border-radius: 12px; /* Bordes redondeados */
  padding: 15px;
  background-color: #fff;
}

.coffee-carrousel {
  height: 230px !important;
}

.coffee-carrousel-img {
  height: 180px !important;
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
}

@media(min-width: 400px) {
  .coffee-carrousel {
    height: 330px !important;
  }
  .coffee-carrousel-img {
    height: 280px !important;
  }
}
</style>
