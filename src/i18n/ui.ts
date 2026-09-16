export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    'nav.projects': 'Proyectos',
    'nav.notes': 'Notas',
    'skip.link': 'Saltar al contenido',
    'site.tagline': 'Una vidriera de las cosas que construí en la web.',
    'projects.title': 'Proyectos',
    'notes.title': 'Notas',
    'notes.empty': 'Todavía no hay notas.',
    'notes.back': '← Volver a Notas',
    'footer.email': 'Escribime',
    'footer.github': 'GitHub',
    'lang.switch': 'English',
  },
  en: {
    'nav.projects': 'Projects',
    'nav.notes': 'Notes',
    'skip.link': 'Skip to content',
    'site.tagline': 'A showcase of the things I built on the web.',
    'projects.title': 'Projects',
    'notes.title': 'Notes',
    'notes.empty': 'No notes yet.',
    'notes.back': '← Back to Notes',
    'footer.email': 'Write me',
    'footer.github': 'GitHub',
    'lang.switch': 'Español',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];
