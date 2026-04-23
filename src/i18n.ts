import type { Lang } from '../config';

export const ui: Record<Lang, Record<string, string>> = {
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.publications': 'Publications',
  },
  zh: {
    'nav.about': '关于',
    'nav.experience': '经历',
    'nav.education': '教育',
    'nav.publications': '发表',
  },
  de: {
    'nav.about': 'Über',
    'nav.experience': 'Erfahrung',
    'nav.education': 'Ausbildung',
    'nav.publications': 'Publikationen',
  },
  fr: {
    'nav.about': 'À propos',
    'nav.experience': 'Expérience',
    'nav.education': 'Formation',
    'nav.publications': 'Publications',
  },
};

export function t(lang: Lang, key: string): string {
  return ui[lang]?.[key] ?? ui.en[key] ?? key;
}
