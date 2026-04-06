import { createI18n } from 'vue-i18n'
import en from '../locales/en.js'
import zh from '../locales/zh.js'
import ms from '../locales/ms.js'

const i18n = createI18n({
  locale: 'en',          // default language
  fallbackLocale: 'en',  // fallback if key missing
  messages: { en, zh, ms }
})

export default i18n