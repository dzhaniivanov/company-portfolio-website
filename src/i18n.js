import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/translationEN.json";
import translationBG from "./locales/translationBG.json";

const resources = {
    en: {
        translation: translationEN
    },
    bg: {
        translation: translationBG
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n;


