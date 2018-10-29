import I18n from 'react-native-i18n';
import en from './translations/en';

I18n.fallbacks = true;
I18n.missingBehaviour = 'guess'; // It will convert HOME_noteTitle to "HOME note title" if the value of HOME_noteTitle doesn't exist in any of the translation files.
I18n.defaultLocale = 'en';
I18n.locale = 'en';

I18n.translations = {
    en,
};

export const setLocale = (locale) => {
    I18n.locale = locale;
};

export const getCurrentLocale = () => I18n.locale; // It will be used to define initial language state in reducer.


export const translateHeaderText = (langKey) => ({screenProps}) => {
    const title = I18n.translate(langKey, screenProps.language);
    return {title};
};

export default I18n.translate.bind(I18n);