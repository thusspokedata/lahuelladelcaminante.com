import { describe, it, expect } from 'vitest';
import { getLangFromUrl, useTranslations, localizedUrl } from '../src/i18n/utils';

describe('getLangFromUrl', () => {
  it('returns es for the root path', () => {
    expect(getLangFromUrl(new URL('https://x.com/'))).toBe('es');
  });
  it('returns es for a non-en path', () => {
    expect(getLangFromUrl(new URL('https://x.com/notas'))).toBe('es');
  });
  it('returns en for an /en path', () => {
    expect(getLangFromUrl(new URL('https://x.com/en/'))).toBe('en');
  });
  it('returns en for a nested /en path', () => {
    expect(getLangFromUrl(new URL('https://x.com/en/notes/hello'))).toBe('en');
  });
});

describe('localizedUrl', () => {
  it('builds es home', () => expect(localizedUrl('es', 'home')).toBe('/'));
  it('builds en home', () => expect(localizedUrl('en', 'home')).toBe('/en/'));
  it('builds es notes', () => expect(localizedUrl('es', 'notes')).toBe('/notas'));
  it('builds en notes', () => expect(localizedUrl('en', 'notes')).toBe('/en/notes'));
});

describe('useTranslations', () => {
  it('returns the string for the given lang', () => {
    const t = useTranslations('en');
    expect(t('nav.projects')).toBe('Projects');
  });
  it('returns the Spanish string for the given lang', () => {
    expect(useTranslations('es')('nav.projects')).toBe('Proyectos');
  });
});
