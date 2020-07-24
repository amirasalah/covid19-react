import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    en: {
        translation: {
            'Select a country': 'Select a country',
            'Home Page': 'Home',
            'Get Latest Covid-19 updates': 'Get Latest Covid-19 updates',
            'Please choose your preferred scope':
                'Please choose your preferred scope',
            'world wide': 'world wide',
            'choose country': 'choose country',
            'Last Update': 'Last Update',
            'New Confirmed Cases': 'New Confirmed Cases',
            'New Deaths Cases': 'New Deaths Cases',
            'New Recovered Cases': 'New Recovered Cases',
            'Total Confirmed Cases': 'Total Confirmed Cases',
            'Confirmed Cases': 'Confirmed Cases',
            'Deaths Cases': 'Deaths Cases',
            'Active Cases': 'Active Cases',
            'Recovered Cases': 'Recovered Cases',
        },
    },
    ar: {
        translation: {
            'Select a country': 'اختر دولة',
            'Home Page': 'الصفحة الرئيسية',
            'Get Latest Covid-19 updates': 'احصل على آخر تحديثات Covid-19',
            'Please choose your preferred scope': 'يرجى اختيار نطاقك المفضل',
            'world wide': 'العالم',
            'choose country': 'اختر البلد',
            'Last Update': 'اخر تحديث',
            'New Confirmed Cases': 'حالات مؤكدة جديدة',
            'New Deaths Cases': 'حالات وفاة جديدة',
            'New Recovered Cases': 'حالات تعافى جديدة',
            'Total Confirmed Cases': 'إجمالي الحالات المؤكدة',
            'Confirmed Cases': 'الحالات المؤكدة',
            'Deaths Cases': 'حالات الوفاة',
            'Active Cases': 'الحالات المصابة حاليا',
            'Recovered Cases': 'الحالات المستردة',
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
