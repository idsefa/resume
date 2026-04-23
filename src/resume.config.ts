import type { Lang } from './config';

export type ResumeSectionKey = 'about' | 'experience' | 'education' | 'publications';

export type ResumeSectionMeta = {
  kicker: string;
  summary: string;
  accent: string;
  arrowLabel: string;
};

export const SECTION_ORDER: ResumeSectionKey[] = ['about', 'experience', 'education', 'publications'];

export const SECTION_META: Record<Lang, Record<ResumeSectionKey, ResumeSectionMeta>> = {
  en: {
    about: {
      kicker: 'Overview',
      summary: 'A concise snapshot of role, focus, and positioning.',
      accent: '#2457ff',
      arrowLabel: 'Profile',
    },
    experience: {
      kicker: 'Career track',
      summary: 'Roles, milestones, and the shape of your contribution over time.',
      accent: '#0f766e',
      arrowLabel: 'Experience',
    },
    education: {
      kicker: 'Learning path',
      summary: 'Formal training, research direction, and academic background.',
      accent: '#b45309',
      arrowLabel: 'Education',
    },
    publications: {
      kicker: 'Selected output',
      summary: 'Papers and publication highlights with a clean reading rhythm.',
      accent: '#7c3aed',
      arrowLabel: 'Publications',
    },
  },
  zh: {
    about: {
      kicker: '概览',
      summary: '用一句话说明你的定位、方向和个人标签。',
      accent: '#2457ff',
      arrowLabel: '简介',
    },
    experience: {
      kicker: '履历轨迹',
      summary: '按时间呈现关键角色、成果和能力递进。',
      accent: '#0f766e',
      arrowLabel: '经历',
    },
    education: {
      kicker: '学习路径',
      summary: '展示学术训练、研究方向和教育背景。',
      accent: '#b45309',
      arrowLabel: '教育',
    },
    publications: {
      kicker: '代表成果',
      summary: '用更克制的节奏呈现论文和发表亮点。',
      accent: '#7c3aed',
      arrowLabel: '发表',
    },
  },
  de: {
    about: {
      kicker: 'Übersicht',
      summary: 'Eine knappe Zusammenfassung von Rolle, Fokus und Positionierung.',
      accent: '#2457ff',
      arrowLabel: 'Profil',
    },
    experience: {
      kicker: 'Beruflicher Weg',
      summary: 'Rollen, Meilensteine und die Entwicklung des Beitrags über die Zeit.',
      accent: '#0f766e',
      arrowLabel: 'Erfahrung',
    },
    education: {
      kicker: 'Lernweg',
      summary: 'Formale Ausbildung, Forschungsrichtung und akademischer Hintergrund.',
      accent: '#b45309',
      arrowLabel: 'Ausbildung',
    },
    publications: {
      kicker: 'Ausgewählte Arbeiten',
      summary: 'Publikationen mit ruhigem Lesetempo und klarer Hierarchie.',
      accent: '#7c3aed',
      arrowLabel: 'Publikationen',
    },
  },
  fr: {
    about: {
      kicker: 'Aperçu',
      summary: 'Un résumé concis du rôle, du focus et du positionnement.',
      accent: '#2457ff',
      arrowLabel: 'Profil',
    },
    experience: {
      kicker: 'Parcours',
      summary: 'Rôles, jalons et évolution de la contribution dans le temps.',
      accent: '#0f766e',
      arrowLabel: 'Expérience',
    },
    education: {
      kicker: 'Formation',
      summary: 'Formation, direction de recherche et contexte académique.',
      accent: '#b45309',
      arrowLabel: 'Formation',
    },
    publications: {
      kicker: 'Travaux sélectionnés',
      summary: 'Publications présentées avec un rythme de lecture calme et clair.',
      accent: '#7c3aed',
      arrowLabel: 'Publications',
    },
  },
};
