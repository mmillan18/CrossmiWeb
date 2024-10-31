<!-- Origenes.vue -->
<template>
  <v-container fluid class="origins-section">
    <v-row justify="center">
      <!-- Títulos principales -->
      <v-col cols="12" class="text-center">
        <h1 class="main-title">Descubre los Orígenes de Nuestros Productos</h1>
        <h2 class="sub-title">Desde las Montañas de Colombia hasta tu Taza</h2>
      </v-col>

      <!-- Imagen y descripción -->
      <v-col cols="12" md="6" class="image-section">
          <div class="image-container">
            <!-- Imagen ajustada más pequeña y alineada a la derecha -->
            <v-img :src="actionImage"  class="action-image" />
            <!-- Cuadro de color lila pegado a la esquina superior izquierda de la imagen -->
          </div>
        </v-col>

      <!-- Texto introductorio -->
      <v-col cols="12" md="10" class="intro-text">
        <p>
          En CROSSMI, estamos dedicados a traerte la esencia pura del café colombiano. Nuestro compromiso con la sostenibilidad, la calidad y la autenticidad asegura que cada taza que disfrutes no sea solo una bebida, sino un viaje a las vibrantes colinas de Tolima. Disfruta de los sabores de Colombia y experimenta la pasión y la tradición que hacen que nuestro café sea verdaderamente único.
        </p>
        <p>Descubre los orígenes. Saborea la excelencia.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      // Carga de la imagen con `new URL(...)`
      actionImage: new URL('@/assets/mapacafe-min.png', import.meta.url).href,
    };
  },
};
</script>

<style scoped>
.origins-section {
  background-color: #fdf7e2;
  padding: 40px 20px;
}

.main-title {
  font-size: 2.5rem;
  color: #663f3f;
}

.sub-title {
  font-size: 1.5rem;
  color: #7a7a7a;
}

.image-description-section {
  display: flex;
  justify-content: center;
}

.origin-card {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
}

.origin-image {
  border-radius: 12px;
  width: 100%;
  height: auto;
}

.description-overlay {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 10px;
  border-radius: 8px;
  max-width: 250px;
  font-size: 0.9rem;
  line-height: 1.3;
}

.intro-text {
  font-size: 1.1rem;
  color: #3d3d3d;
  text-align: justify;
  margin-top: 20px;
  line-height: 1.6;
}
</style>
