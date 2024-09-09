<template>
  <v-app-bar
    color="primary"
    elevate-on-scroll
    flat
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

    <!-- Drawer para pantallas móviles -->

  </v-app-bar>
  <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'right' : undefined" temporary>
    <v-list :items="navbarItems">

    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { watch } from 'vue';
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
          title:'Sobre Nosotros',
        },
        {
          title:'Orígenes',
        },
        {
          title:'Productos',
        },
      ], // Opciones del navbar
      drawer: false, // Controla la apertura del menú hamburguesa en móviles
      group: null,
      selectedLanguage: 'es',  // Idioma por defecto español

      //drawer: false, // Controla la apertura del menú hamburguesa en móviles
      languages: [
        { text: 'Español', value: 'es', flag: 'src/assets/flags/es-min.png' },
        { text: 'Inglés', value: 'en', flag: 'src/assets/flags/en-min.png' }
      ]
    }
  },
  watch:{
    group(){
      this.drawer = false
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
  max-width: 150px; /* Máximo tamaño en pantallas grandes */
  min-width: 100px; /* Mínimo tamaño en pantallas pequeñas */
}

/* Efecto hover en las opciones del navbar */
.navbar-item:hover {
  color: #f77a3b;
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
</style>
