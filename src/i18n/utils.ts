import { ui, defaultLang, type Lang, type UIKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/')[1];
  return seg === 'en' ? 'en' : 'es';
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function localizedUrl(lang: Lang, route: 'home' | 'notes'): string {
  if (route === 'home') return lang === 'en' ? '/en/' : '/';
  return lang === 'en' ? '/en/notes' : '/notas';
}
