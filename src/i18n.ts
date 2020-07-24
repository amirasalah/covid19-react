import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: {
            'Select a country': 'Select a country',
            'Home Page': 'Home',
            'Get Latest Covid-19 updates': 'Get Latest Covid-19 updates',
            'Please choose your preferred scope':
                'Please choose your preferred scope',
        },
    },
    ar: {
        translation: {
            'Select a country': 'اختر دولة',
            'Home Page': 'الصفحة الرئيسية',
            'Get Latest Covid-19 updates': 'احصل على آخر تحديثات Covid-19',
            'Please choose your preferred scope': 'يرجى اختيار نطاقك المفضل',
        },
    },
}

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
    },
})
export default i18n
