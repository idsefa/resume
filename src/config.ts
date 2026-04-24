export const SITE = {
  title: 'He Haocheng',
  description: 'Personal CV',
};

export const NAVIGATION_SITE_URL = 'https://nav.example.com';

export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/YOUR_HANDLE', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/YOUR_HANDLE', icon: 'github' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=YOUR_ID', icon: 'scholar' },
  { label: 'ORCID', href: 'https://orcid.org/YOUR_ORCID', icon: 'orcid' },
  { label: 'Navigation', href: NAVIGATION_SITE_URL, icon: 'navigation' },
];

export const LANGUAGES = ['en', 'zh', 'zh-hant', 'de', 'fr'] as const;
export type Lang = typeof LANGUAGES[number];

export const LANGUAGE_META: Record<Lang, { label: string; name: string }> = {
  en: { label: 'EN', name: 'English' },
  zh: { label: '中文', name: '中文' },
  'zh-hant': { label: '繁中', name: '繁體中文' },
  de: { label: 'DE', name: 'Deutsch' },
  fr: { label: 'FR', name: 'Français' },
};

export const DEFAULT_LANG: Lang = 'en';
