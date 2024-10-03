<template>
  <v-app-bar
    color="primary"
    elevate-on-scroll
    flat
    fixed  
    class="navbar"
  >
    <v-row class="d-flex justify-space-between align-center">
      <!-- Logo ajustado a la izquierda -->
      <v-col cols="2" class="d-flex align-center ps-10">
        <v-img
          src="src/assets/logocafe-min.png"
          class="logo"
          alt="Logo"
        ></v-img>
      </v-col>

      <!-- Botones de navegación al centro (solo en pantallas grandes) -->
      <v-col v-if="isDesktop" cols="auto" class="d-flex justify-center">
        <v-row>
          <v-btn
            v-for="(item, i) in navbarItems"
            :key="i"
            text
            :class="{ 'btn-active': selectedItem === item }"
            @click="selectedItem = item"
            class="navbar-item"
          >
            {{ item.title }}
          </v-btn>
        </v-row>
      </v-col>

      <!-- Selector de idioma y menú hamburguesa (para pantallas pequeñas) -->
      <v-col cols="auto" class="d-flex justify-end align-center mr-3">
        <!-- Selector de idioma -->
        <v-menu offset-y :nudge-bottom="10" :max-width="140">
          <template v-slot:activator="{ props, on }">
            <v-btn
              v-bind="props"
              v-on="on"
              class="language-button"
              text
            >
              <div class="flag-text-container">
                <v-img
                  :src="selectedFlag"
                  width="24"
                  height="20"
                  alt="Language Flag"
                  class="flag-icon"
                />
                <span class="language-text">{{ selectedLanguage === 'es' ? 'Español' : 'English' }}</span>
              </div>
            </v-btn>
          </template>
          <v-list class="menu-list">
            <v-list-item
              v-for="(lang, i) in availableLanguages"
              :key="i"
              @click="setLanguage(lang.value)"
              class="menu-item"
            >
              <div class="menu-item-content">
                <v-img :src="lang.flag" alt="Flag" width="20" height="20"></v-img>
                <span class="menu-language-text">{{ lang.text }}</span>
              </div>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- Icono de hamburguesa (solo en pantallas móviles) -->
        <v-app-bar-nav-icon v-if="!isDesktop" @click.stop="drawer = !drawer" />
      </v-col>
    </v-row>
  </v-app-bar>

  <!-- Drawer para pantallas móviles -->
  <v-navigation-drawer v-model="drawer" location="right" temporary class="drawer-background" width="280" >
    <v-list>
      <v-list-item
        v-for="(item, i) in navbarItems"
        :key="i"
        @click="drawer = false; selectedItem = item"
        class="menu-item-drawer"
      >
        <v-list-item-title class="drawer-text">{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <!-- Footer fijo con contacto, íconos y copyright -->
    <template v-slot:append>
      <v-divider></v-divider>
      <v-container class="footer-drawer">
        <div class="contact-info">
          <p>Contactanos: <br>
            <v-icon class="mr-2" icon="mdi-email">mdi-email</v-icon>
            <a href="mailto:Comercial@frutosevergreen.com" class="link">Comercial@frutosevergreen.com</a>
            <br>
            <v-icon class="mr-2">mdi-phone</v-icon>
            <a href="tel:+573156299567" class="link">+57 3156299567</a>
          </p>

          <!-- Redes sociales -->
          <div class="social-media ma-3">
            <v-btn class="miboton" icon href="https://www.instagram.com/frutos_evergreen?igsh=bDMyYmltN3c4OHlr&utm_source=qr" target="_blank" flat color="transparent">
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn class="miboton" icon href="https://wa.me/573156299567" target="_blank" flat color="transparent">
              <v-icon>mdi-whatsapp</v-icon>
            </v-btn>
            <v-btn class="miboton" icon href="https://www.linkedin.com/in/frutos-evergreen/" target="_blank" flat color="transparent">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </div>
        </div>

        <v-divider></v-divider>
        <div class="copyright ma-3">
          <p>© 2024 Frutos Evergreen</p>
        </div>
      </v-container>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { useDisplay } from 'vuetify'

export default {
  setup() {
    const { mdAndUp } = useDisplay() // Usamos useDisplay para manejar el comportamiento responsivo

    return {
      isDesktop: mdAndUp, // Devuelve verdadero si la pantalla es mediana o más grande (mdAndUp)
    }
  },
  data() {
    return {
      selectedItem: '', // Guardar el ítem seleccionado
      navbarItems: [
        {
          title: 'Inicio',
        },
        {
          title: 'Sobre Nosotros',
        },
        {
          title: 'Orígenes',
        },
        {
          title: 'Productos',
        },
      ], // Opciones del navbar
      drawer: false, // Controla la apertura del menú hamburguesa en móviles
      selectedLanguage: 'es',  // Idioma por defecto español
      languages: [
        { text: 'Español', value: 'es', flag: 'src/assets/flags/es-min.png' },
        { text: 'Inglés', value: 'en', flag: 'src/assets/flags/en-min.png' }
      ]
    }
  },
  computed: {
    selectedFlag() {
      const selectedLang = this.languages.find(
        (lang) => lang.value === this.selectedLanguage
      )
      return selectedLang ? selectedLang.flag : ''
    },
    availableLanguages() {
      return this.languages.filter(lang => lang.value !== this.selectedLanguage)
    }
  },
  methods: {
    setLanguage(lang) {
      this.selectedLanguage = lang
    }
  }
}
</script>

<style scoped>
/* Alineación del navbar y ajustes */
.navbar {
  background-color: #faf5e2;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10; /* Asegura que el navbar esté siempre por encima */
  position: fixed!important;
}

.v-btn {
  font-size: 18px;
  color: #663f3f;
  text-transform: none;
}

.v-btn:hover {
  background-color: transparent;
  color: #f77a3b;
}

.btn-active {
  color: #f77a3b;
  background-color: transparent;
}

.v-row {
  width: 100%;
  justify-content: center;
}

/* Ajustes del logo para que se vea bien en pantallas móviles y grandes */
.logo {
  max-width: 150px;
  min-width: 100px;
}

/* Efecto hover en las opciones del navbar y drawer */
.navbar-item:hover .v-btn,
.menu-item-drawer:hover .drawer-text {
  color: #f77a3b !important;
}

.miboton:hover {
  color: #f77a3b !important;
}

/* Drawer estilos para mobile */
.drawer-background {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #faf5e2;
  height: 100%;
  
}

.menu-item-drawer {
  color: #663f3f;
  padding: 15px;
  font-size: 18px;
}

.drawer-text {
  color: #663f3f;
}

/* Footer fijo dentro del Drawer */
.footer-drawer {
  text-align: center;
  color: #663f3f;
  font-size: 14px;
  margin-top: auto;
  padding: 15px;
}

.contact-info, .copyright {
  margin-bottom: 20px;
}

.social-media {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.link {
  color: #663f3f;
  text-decoration: none;
}

.link:hover {
  color: #f77a3b;
  text-decoration: underline;
}

/* Selector de idioma */
.language-button {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #663f3f;
  width: 140px;
  white-space: nowrap;
}

.language-button:hover {
  color: #f77a3b;
}

.flag-icon {
  margin-right: 5px;
  width: 24px;
  height: 20px;
  object-fit: contain;
}

.menu-item-content img {
  width: 24px;
  height: 20px;
  object-fit: contain;
}

.flag-text-container {
  display: flex;
  align-items: center;
  gap: 5px;
}

.menu-item-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.menu-list {
  padding: 2px 8px;
}

.menu-item {
  padding: 4px 8px;
}

.menu-language-text {
  margin-left: 8px;
}

.language-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.v-navigation-drawer{
  width: 200px;
  height: 100%;
  position: fixed!important;
}
</style>
