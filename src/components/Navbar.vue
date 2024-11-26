<template>
  <v-app-bar color="primary" elevate-on-scroll flat fixed class="navbar">
    <v-row class="d-flex justify-space-between align-center">
      <!-- Logo ajustado a la izquierda y responsivo -->
      <v-col cols="2" class="d-flex align-center ps-10">
        <v-img :src="logoImage" class="logo" alt="Logo"></v-img>


      </v-col>

      <!-- Botones de navegación al centro (solo en pantallas grandes) -->
      <v-col v-if="isDesktop" cols="auto" class="d-flex justify-center">
        <v-row>
          <v-btn
            v-for="(item, i) in navbarItems"
            :key="i"
            text
            :class="{ 'btn-active': selectedItem === item.key }"
            @click="item.submenu ? toggleSubmenu(i) : navigateTo(item)"
            class="navbar-item"
          >
            {{ getTranslation(item.key) }}
            <v-icon v-if="item.submenu" small class="navbar-icon">mdi-chevron-down</v-icon>
          </v-btn>

          <!-- Submenú para Productos en Navbar, con ajuste para aparecer justo debajo -->
          <v-menu
            v-if="navbarItems.find(item => item.key === 'productos').showSubmenu"
            v-model="navbarItems.find(item => item.key === 'productos').showSubmenu"
            close-on-content-click
            nudge-width="auto"
            offset-y
          >
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" icon class="invisible-icon"> <!-- Botón invisible para mantener el menú en su lugar -->
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="navigateTo({ route: '/coffee' })" class="submenu-item">{{ getTranslation('cafe') }}</v-list-item>
              <v-list-item @click="navigateTo({ route: '/cacao' })" class="submenu-item">{{ getTranslation('cacao') }}</v-list-item>
            </v-list>
          </v-menu>
        </v-row>
      </v-col>

      <!-- Selector de idioma y menú hamburguesa (para pantallas pequeñas) -->
      <v-col cols="auto" class="d-flex justify-end align-center mr-3">
        <!-- Selector de idioma -->
        <v-menu offset-y :nudge-bottom="10" :max-width="140">
          <template v-slot:activator="{ props, on }">
            <v-btn v-bind="props" v-on="on" class="language-button" text>
              <div class="flag-text-container">
                <v-img :src="selectedFlag" width="24" height="20" alt="Language Flag" class="flag-icon" />
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
        <v-app-bar-nav-icon v-if="!isDesktop" @click.stop="toggleDrawer" />
      </v-col>
    </v-row>
  </v-app-bar>

  <!-- Drawer para pantallas móviles -->
  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
    @click-outside="closeDrawerOutside"
    class="drawer-background"
    width="280"
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in navbarItems"
        :key="i"
        @click="item.submenu ? toggleDrawerSubmenu() : closeDrawer(item)"
        class="menu-item-drawer"
      >
        <v-list-item-title class="drawer-text">
          {{ getTranslation(item.key) }}
          <v-icon v-if="item.submenu" small class="drawer-icon">mdi-chevron-down</v-icon>
        </v-list-item-title>
      </v-list-item>
      <!-- Submenú para Productos en Drawer -->
      <v-list v-if="showDrawerSubmenu" class="submenu-list">
        <v-list-item @click="closeDrawer({ route: '/coffee' })" class="submenu-item-drawer">{{ getTranslation('cafe') }}</v-list-item>
        <v-list-item @click="closeDrawer({ route: '/cacao' })" class="submenu-item-drawer">{{ getTranslation('cacao') }}</v-list-item>
      </v-list>
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
import { useDisplay } from 'vuetify';

export default {
  setup() {
    const { mdAndUp } = useDisplay();
    return {
      isDesktop: mdAndUp
    };
  },
  data() {
    return {
      logoImage: new URL('@/assets/logocafe-min.png', import.meta.url).href,
      selectedItem: '',
      drawer: false,
      showDrawerSubmenu: false,
      navbarItems: [
        { key: 'inicio', route: '/' },
        { key: 'sobreNosotros', route: '/about' },
        { key: 'origenes', route: '/origins' },
        { key: 'productos', submenu: true, showSubmenu: false }
      ],
      selectedLanguage: 'es', // Idioma predeterminado
      languages: [
        { text: 'Español', value: 'es', flag: new URL('@/assets/flags/es-min.png', import.meta.url).href },
        { text: 'Inglés', value: 'en', flag: new URL('@/assets/flags/en-min.png', import.meta.url).href }
      ],
      translations: {
        es: {
          inicio: 'Inicio',
          sobreNosotros: 'Sobre Nosotros',
          origenes: 'Orígenes',
          productos: 'Productos',
          cafe: 'Café',
          cacao: 'Cacao'
        },
        en: {
          inicio: 'Home',
          sobreNosotros: 'About Us',
          origenes: 'Origins',
          productos: 'Products',
          cafe: 'Coffee',
          cacao: 'Cocoa'
        }
      }
    };
  },
  computed: {
    selectedFlag() {
      const selectedLang = this.languages.find(lang => lang.value === this.selectedLanguage);
      return selectedLang ? selectedLang.flag : '';
    },
    availableLanguages() {
      return this.languages.filter(lang => lang.value !== this.selectedLanguage);
    }
  },
  methods: {
    setLanguage(lang) {
      this.selectedLanguage = lang;
      localStorage.setItem('selectedLanguage', lang); // Guarda el idioma en localStorage
      this.$emit('languageChanged', lang); // Emite el evento hacia el componente principal
    },
    getTranslation(key) {
      return this.translations[this.selectedLanguage][key];
    },
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    closeDrawer(item = null) {
      this.drawer = false;
      this.showDrawerSubmenu = false;
      if (item && item.route) {
        this.selectedItem = item.key;
        this.$router.push(item.route);
      }
    },
    closeDrawerOutside() {
      this.drawer = false;
    },
    navigateTo(item) {
      this.selectedItem = item.key;
      if (item.route) this.$router.push(item.route);
    },
    toggleSubmenu(index) {
      this.navbarItems[index].showSubmenu = !this.navbarItems[index].showSubmenu;
    },
    toggleDrawerSubmenu() {
      this.showDrawerSubmenu = !this.showDrawerSubmenu;
    }
  },
  mounted() {
    // Al montarse, verifica si hay un idioma guardado en localStorage
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      this.selectedLanguage = savedLanguage;
    }
  }
};
</script>





<style scoped>
/* Alineación del navbar y ajustes */
.navbar {
  background-color: #faf5e2;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
  position: fixed !important;
}

.logo {
  max-width: 150px;
  min-width: 100px;
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

.navbar-icon, .drawer-icon {
  margin-left: 5px;
  color: #663f3f;
}

.navbar-icon:hover, .drawer-icon:hover {
  color: #f77a3b !important;
}

/* Estilos para el submenu del navbar */
.submenu-item, .submenu-item-drawer {
  font-size: 16px;
  color: #663f3f;
  padding: 10px 20px;
}

.submenu-item:hover, .submenu-item-drawer:hover {
  color: #f77a3b;
  background-color: #faf5e2;
}

/* Drawer estilos para mobile */
.drawer-background {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #faf5e2;
  height: 100%;
}

.v-navigation-drawer {
  width: 280px;
  height: 100vh;
  position: fixed !important;
  top: 0;
  bottom: 0;
  overflow-y: auto;
}

.menu-item-drawer {
  color: #663f3f;
  padding: 15px;
  font-size: 18px;
}

.drawer-text {
  color: #663f3f;
}

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
</style> 