import type { Lang } from '../config';

export const ui: Record<Lang, Record<string, string>> = {
  en: {
    'nav.menu': 'Menu',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.publications': 'Publications',
    'nav.navigator': 'Navigator',
  },
  zh: {
    'nav.menu': '菜单',
    'nav.about': '关于',
    'nav.experience': '经历',
    'nav.education': '教育',
    'nav.publications': '发表',
    'nav.navigator': '导航站',
  },
  'zh-hant': {
    'nav.menu': '選單',
    'nav.about': '關於',
    'nav.experience': '經歷',
    'nav.education': '教育',
    'nav.publications': '發表',
    'nav.navigator': '導航站',
  },
  de: {
    'nav.menu': 'Menü',
    'nav.about': 'Über',
    'nav.experience': 'Erfahrung',
    'nav.education': 'Ausbildung',
    'nav.publications': 'Publikationen',
    'nav.navigator': 'Navigation',
  },
  fr: {
    'nav.menu': 'Menu',
    'nav.about': 'À propos',
    'nav.experience': 'Expérience',
    'nav.education': 'Formation',
    'nav.publications': 'Publications',
    'nav.navigator': 'Navigation',
  },
};

export function t(lang: Lang, key: string): string {
  return ui[lang]?.[key] ?? ui.en[key] ?? key;
}
