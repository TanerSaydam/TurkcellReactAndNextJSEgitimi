import 'server-only';

const languages = {
    tr: () => import("./tr.json").then((module)=> module.default),
    en: () => import("./en.json").then((module)=> module.default),
}

export const getLanguage = async(lang) => languages[lang]()