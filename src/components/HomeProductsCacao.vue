<template>
  <v-container class="home-products-container" fluid>
    <!-- Línea divisora amarilla -->
    <div class="divider"></div>

    <!-- Texto centrado -->
    <v-row class="text-center justify-center">
      <v-col cols="12">
        <h2 class="main-title">Momentos Deliciosos con Nuestro Cacao</h2>
        <p class="subtitle">La Dulzura y Pureza del Cacao Colombiano</p>
      </v-col>
    </v-row>

    <!-- Imagen de "Coming Soon" sobrepuesta en la esquina superior derecha -->
    <v-img :src="comingSoonImage" class="coming-soon-overlay" />

    <!-- Carrusel de productos -->
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-carousel class="coffee-carrousel" hide-delimiter-background="false" :show-arrows="false" v-model="model" cycle>
          <v-carousel-item v-for="(product, index) in products" :key="index">
            <v-card class="mx-auto card-with-shadow" outlined>
              <v-img :src="product.image" class="white--text coffee-carrousel-img"></v-img>
              <v-card-title>{{ product.title }}</v-card-title>
              <v-card-subtitle>{{ product.description }}</v-card-subtitle>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <!-- Imágenes en las esquinas (inferior izquierda y derecha) -->
    <v-img :src="leftImage" alt="Cacao en la esquina izquierda" class="corner-img left" />
    <v-img :src="rightImage" alt="Cacao en la esquina derecha" class="corner-img right" />

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
  name: 'HomeProductsCacao',
  data() {
    return {
      model: 0, // Control del carrusel
      leftImage: new URL('@/assets/esq4-min.png', import.meta.url).href,
      rightImage: new URL('@/assets/esq3-min.png', import.meta.url).href,
      comingSoonImage: new URL('@/assets/coming-soon-min.png', import.meta.url).href, // Imagen "Coming Soon"
      products: [
        {
          image: new URL('@/assets/Cocoa1-min.png', import.meta.url).href,
          whatsappName: "Premium dry Cocoa Beans",
        },
        {
          image: new URL('@/assets/cocoa2-min.png', import.meta.url).href,
          whatsappName: "Cocoa liquor and powder",
        },
        {
          image: new URL('@/assets/cocoa3-min.png', import.meta.url).href,
          whatsappName: "Cocoa Nibs",
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

/* Imágenes de las esquinas (parte inferior) */
.corner-img {
  position: absolute;
  width: 200px;
  height: auto;
}

.left {
  bottom: -10px;
  left: 0;
}

.right {
  bottom: -10px;
  right: 0;
}

/* Responsividad */
@media (max-width: 768px) {
  .corner-img {
    width: 100px;
    bottom: 0px;
  }
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
  border-radius: 12px;
  padding: 15px;
  background-color: #fff;
  position: relative;
}

/* Estilo de la imagen "Coming Soon" sobrepuesta */
.coming-soon-overlay {
  position: absolute;
  top: 160px;
  right: 200px;
  width: 250px;
  height: auto;
  z-index: 10; /* Asegura que la imagen esté por encima de otros elementos */
  opacity: 0.9;
}

/* Ajuste de la altura del carrusel y las imágenes */
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

  .coming-soon-overlay {
    width: 120px; /* Tamaño adaptado en pantallas pequeñas */
    top: 230px;
    right: 10px;
  }
}

@media (min-width: 400px) {
  .coffee-carrousel {
    height: 330px !important;
  }

  .coffee-carrousel-img {
    height: 280px !important;
  }

  
}
</style> 