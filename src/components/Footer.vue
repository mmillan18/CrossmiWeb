<template>
  <v-footer class="footer" padless>
    <v-container fluid>
      <v-row class="justify-center">
        <!-- Cuadro blanco con información -->
        <v-col cols="12" md="8" class="info-box">
          <v-row>
            <!-- Sección de contacto -->
            <v-col cols="12" md="4" class="text-center">
              <h3 class="footer-title">Contact Us</h3>
              <p>Comercial@frutosevergreen.com</p>
              <p>+57 3156299567</p>
            </v-col>

            <!-- Sección de redes sociales -->
            <v-col cols="12" md="4" class="text-center">
              <h3 class="footer-title">Connect Us</h3>
              <v-btn icon href="https://www.instagram.com/frutos_evergreen?igsh=bDMyYmltN3c4OHlr&utm_source=qr" target="_blank" class="social-button">
                <v-icon class="social-icon">mdi-instagram</v-icon>
              </v-btn>
              <v-btn icon href="https://wa.me/573156299567" target="_blank" class="social-button">
                <v-icon class="social-icon">mdi-whatsapp</v-icon>
              </v-btn>
              <v-btn icon href="https://www.linkedin.com/in/frutos-evergreen/" target="_blank" class="social-button">
                <v-icon class="social-icon">mdi-linkedin</v-icon>
              </v-btn>
            </v-col>

            <!-- Sección del logo centrado -->
            <v-col cols="12" md="4" class="d-flex justify-center align-center">
              <v-img :src="logoImage" alt="Frutos Evergreen" class="footer-logo" />
            </v-col>
          </v-row>
          <!-- Derechos de autor -->
          <v-row class="justify-center">
            <v-col cols="12" class="text-center">
              <p>© 2024 Crossmi. All Rights Reserved.</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'Footers',
  data() {
    return {
      logoImage: new URL('@/assets/frutoso-min.png', import.meta.url).href, // Imagen del logo
      backgroundImage: new URL('@/assets/footer-min.jpeg', import.meta.url).href, // Imagen de fondo
    };
  },
};
</script>

<style scoped>
/* Fondo transparente utilizando un pseudo-elemento */
.footer {
  position: relative;
  padding: 20px;
  border-top: 1px solid #e0e0e0;
  z-index: 1;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/footer-min.jpeg'); /* Imagen de fondo */
  background-size: cover;
  background-position: center;
  opacity: 0.8; /* Controla la transparencia aquí */
  z-index: -1; /* Poner la capa detrás del contenido */
}

/* Caja blanca centrada */
.info-box {
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); /* Añadir sombra */
  margin-top: 20px;
  z-index: 1; /* Para asegurarse de que esté sobre la imagen */
}

/* Títulos */
.footer-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #663f3f;
}

/* Iconos de redes sociales */
.social-button {
  margin: 0 10px;
}

.social-icon {
  font-size: 24px;
  color: #663f3f;
}

/* Imagen del logo */
.footer-logo {
  width: 70px;
  height: 80px;
  margin-top: 10px;
}

/* Estilo para el texto */
p {
  color: #663f3f;
  font-size: 0.9rem;
  margin-bottom: 5px;
}

/* Centrado del logotipo en todas las pantallas */
.d-flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.align-center {
  align-items: center;
}

/* Ajustes responsivos */
@media (max-width: 768px) {
  .footer-title {
    font-size: 1rem;
  }

  .social-icon {
    font-size: 20px;
  }

  p {
    font-size: 0.8rem;
  }

  .footer-logo {
    width: 50px;
  }
}
</style>
