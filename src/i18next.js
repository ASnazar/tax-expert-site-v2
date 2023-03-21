import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import ua from './locales/ua/translation.json'
import en from './locales/en/translation.json'

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "ua",
        whitelist:["ua","en"],
        debug: true,

        detection: {

            order: ['localStorage', 'cookie'],
            cache: ['cookie']
        },
        interpolation: {
            escapeValue: false
        },
        resources: {
            ua: {
                translation:ua,
            },
            en: {
                translation: en,
            },
        }
    })

    export default i18n;