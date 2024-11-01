// src/i18n.js
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    language: 'English',
    inicio: 'Home',
    sobreNosotros: 'About Us',
    origenes: 'Origins',
    productos: 'Products',
    cafe: 'Coffee',
    cacao: 'Cocoa',
    contactanos: 'Contact us',
    telefono: 'Phone',
    correo: 'Email'
  },
  es: {
    language: 'Español',
    inicio: 'Inicio',
    sobreNosotros: 'Sobre Nosotros',
    origenes: 'Orígenes',
    productos: 'Productos',
    cafe: 'Café',
    cacao: 'Cacao',
    contactanos: 'Contáctanos',
    telefono: 'Teléfono',
    correo: 'Correo'
  }
}

const i18n = createI18n({
  locale: 'es', // Idioma predeterminado
  fallbackLocale: 'en', // Idioma de respaldo
  messages,
});

export default i18n;
