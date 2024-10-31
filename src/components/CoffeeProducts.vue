<template>
  <v-container class="page-container" fluid>
    <v-row class="justify-center text-center">
      <v-col cols="12">
        <h1 class="page-title">Nuestros Productos de Café</h1>
      </v-col>

      <!-- Productos en una sola columna centrada y grande -->
      <v-col cols="12" md="8" v-for="(product, index) in products" :key="index" class="text-center product-item">
        <v-img :src="product.image" :alt="product.name" class="product-image" />
        <p class="product-description">{{ product.name }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CoffeeProducts',
  data() {
    return {
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
      ]
    };
  },
};
</script>

<style scoped>
.page-container {
  padding-top: 20px;
  background-color: #faf5e2; /* Mismo color de fondo que el Navbar */
}

.page-title {
  color: #663f3f;
  font-weight: bold;
  font-size: 2.5em;
  margin-bottom: 40px;
}

.product-item {
  margin-bottom: 40px;
}

.product-image {
  width: 100%;
  max-width: 1000px; /* Tamaño grande de la imagen */
  margin: 0 auto;
  border-radius: 8px;
}

.product-description {
  font-size: 1.3em;
  color: #333;
  margin-top: 15px;
  font-weight: bold;
}
</style>
