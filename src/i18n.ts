import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from "./locales/en"
import ar from "./locales/ar"
import zh from "./locales/zh"
import Backend from 'i18next-http-backend';


i18next
.use(Backend)
.use(initReactI18next)
.init({
  // lng: 'en',
  debug: true,
  resources:{
    en: {
      translation:en
    },
    ar:{
      translation:ar
    },
    zh:{
      translation:zh
    }
  }
})



export default i18next;