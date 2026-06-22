export const SITE = {
  title: 'He Haocheng',
  description: 'Personal CV',
};

export const NAVIGATION_SITE_URL = 'https://nav.example.com';

export const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/idsefa', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/haocheng-he-92657028b', icon: 'linkedin' },
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

// Resume content mode: 'personal' shows the homepage/personal copy,
// 'career' switches to the job-seeking / career-focused copy.
export type ResumeMode = 'personal' | 'career';
// Change this value to 'career' to use the career-oriented resume overrides.
export const RESUME_MODE: ResumeMode = 'career';

export type LayoutMode = 'classic' | 'light-tech' | 'sidebar';
// Switch between visual layouts
export const LAYOUT: LayoutMode = 'sidebar';

export const RESUME_ROLES = ['default', 'aviation', 'consulting', 'engineering', 'ai', 'quant'] as const;
export type ResumeRole = typeof RESUME_ROLES[number];
