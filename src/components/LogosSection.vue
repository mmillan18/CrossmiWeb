<template>
    <v-container class="logos-container" fluid>
      <!-- Línea divisora amarilla -->
      <div class="divider"></div>
  
      <!-- Logos -->
      <v-row class="d-flex justify-center align-center">
        <v-col
          v-for="(logo, index) in logos"
          :key="index"
          cols="12"
          md="4"
         
        >
          <v-img
            :src="logo.src"
            :alt="logo.alt"
            max-width="150"
            max-height="150"
            class="logo-img"
          />
          <h3 class="logo-caption">{{ logo.caption }}</h3>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        logos: [
          {
            src: new URL('@/assets/logo1-min.png', import.meta.url).href,
            alt: 'Café de Colombia',
            caption: 'Café de Colombia',
          },
          {
            src: new URL('@/assets/logo2-min.png', import.meta.url).href,
            alt: 'Denominación de Origen Protegida',
            caption: 'Denominación de Origen Protegida (DOP) - Colombia',
          },
          {
            src: new URL('@/assets/logo3-min.png', import.meta.url).href,
            alt: 'Indicación Geográfica Protegida',
            caption: 'Indicación Geográfica Protegida (IGP)',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Línea divisora amarilla debajo del carrusel */
  .divider {
    width: 70%; /* Ancho completo */
    height: 10px; /* Altura de la línea divisoria */
    background-color: #f7d26a; /* Color amarillo */
    border-radius: 5px; /* Bordes redondeados */
    margin-bottom: 40px;
    margin-left: auto; /* Centra la línea divisoria */
    margin-right: 0; /* La línea tocará la punta derecha */
  }
  
  /* Contenedor de los logos */
  .logos-container {
    background-color: #fdf7e2; /* Fondo suave */
    padding: 40px 20px; /* Espacio alrededor de los logos */
    text-align: center;
  }
  
  /* Estilo de cada imagen de logo */
  .logo-img {
    margin-bottom: 10px; /* Espacio entre el logo y el texto */
    display: block;
    margin-left: auto;
    margin-right: auto; /* Centrar los logos */
  }
  
  /* Estilo del texto debajo de cada logo */
  .logo-caption {
    font-size: 1.2rem;
    color: #5a5a5a;
  }
  
  /* Centrar logos en móviles y pantallas grandes */
  .v-row {
    justify-content: center !important; /* Centrar horizontalmente */
    align-items: center !important; /* Centrar verticalmente */
  }
  
  .d-flex {
    display: flex;
  }
  
  .flex-column {
    flex-direction: column;
  }
  
  .align-center {
    align-items: center;
  }
  
  .justify-center {
    justify-content: center;
  }
  
  @media (max-width: 600px) {
    .logo-caption {
      font-size: 1rem; /* Texto más pequeño en pantallas pequeñas */
    }
  
    .logo-img {
      max-width: 100px;
      max-height: 100px; /* Ajuste del tamaño de los logos en pantallas pequeñas */
    }
  }
  </style>
  