import type { Lang } from './config';
import { RESUME_CONTENT_OVERRIDES, type DeepPartial } from './resume-overrides/index';

export type FactItem = {
  label: string;
  value: string;
  href?: string;
};

export type HighlightItem = {
  title: string;
  description: string;
};

export type TimelineItem = {
  title: string;
  org: string;
  period: string;
  location: string;
  bullets: string[];
};

export type PublicationItem = {
  title: string;
  year: string;
  authors: string;
  venue: string;
  links: Array<{ label: string; href: string }>;
};

export type PageContent = {
  title: string;
  role: string;
  summary: string[];
};

export type ResumeContent = {
  profile: {
    name: string;
    role: string;
    email: string;
    location: string;
  };
  about: {
    facts: FactItem[];
    highlights: HighlightItem[];
  };
  experience: {
    summary: string[];
    items: TimelineItem[];
  };
  education: {
    summary: string[];
    items: TimelineItem[];
  };
  publications: {
    summary: string[];
    sections: Array<{
      title: string;
      items: PublicationItem[];
    }>;
  };
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function mergeDeep<T>(base: T, override?: DeepPartial<T>): T {
  if (override === undefined) {
    return base;
  }

  if (Array.isArray(base)) {
    return (Array.isArray(override) ? override : base) as T;
  }

  if (isRecord(base) && isRecord(override)) {
    const result: Record<string, unknown> = { ...base };

    for (const key of Object.keys(override)) {
      const baseValue = (base as Record<string, unknown>)[key];
      const overrideValue = (override as Record<string, unknown>)[key];
      result[key] = mergeDeep(baseValue, overrideValue as never);
    }

    return result as T;
  }

  return override as T;
}

const en: ResumeContent = {
  profile: {
    name: 'He Haocheng',
    role: 'Researcher / Engineer',
    email: 'your@email.com',
    location: 'City, Country',
  },
  about: {
    facts: [
      { label: 'Email', value: 'your@email.com', href: 'mailto:your@email.com' },
      { label: 'Location', value: 'City, Country' },
      { label: 'Focus', value: 'Systems, AI, and product-facing research' },
    ],
    highlights: [
      {
        title: 'Clear positioning',
        description: 'A concise profile card keeps the page legible while still feeling intentional.',
      },
      {
        title: 'Structured narrative',
        description: 'Each section is encoded as data, so spacing and hierarchy stay consistent.',
      },
      {
        title: 'Motion with restraint',
        description: 'The design uses entry, hover, and page-load motion instead of constant noise.',
      },
    ],
  },
  experience: {
    summary: [
      'Experience is rendered as a structured timeline instead of raw Markdown paragraphs.',
      'That makes the visual rhythm easy to tune without changing the underlying content model.',
    ],
    items: [
      {
        title: 'Job Title',
        org: 'Company Name',
        period: '2022 – Present',
        location: 'City, Country',
        bullets: ['Key responsibility or achievement', 'Another bullet point'],
      },
      {
        title: 'Previous Role',
        org: 'Previous Company',
        period: '2019 – 2022',
        location: 'City, Country',
        bullets: ['Key responsibility or achievement'],
      },
    ],
  },
  education: {
    summary: [
      'Education keeps the same timeline model as experience, but with a calmer visual accent.',
      'This lets the page feel coherent while still separating academic and professional content.',
    ],
    items: [
      {
        title: 'Ph.D. in Your Field',
        org: 'University Name',
        period: '2015 – 2019',
        location: 'City, Country',
        bullets: ['Thesis: "Your Thesis Title"'],
      },
      {
        title: 'B.Sc. in Your Field',
        org: 'University Name',
        period: '2011 – 2015',
        location: 'City, Country',
        bullets: [],
      },
    ],
  },
  publications: {
    summary: [
      'Publications are grouped into categories so the reader can scan first and inspect later.',
      'Each item is compact but still leaves room for venue, authors, and link actions.',
    ],
    sections: [
      {
        title: 'Journal Articles',
        items: [
          {
            title: 'Your Paper Title',
            year: '2024',
            authors: 'You, A., Coauthor, B.',
            venue: 'Journal Name',
            links: [{ label: 'DOI', href: 'https://doi.org/YOUR_DOI' }],
          },
        ],
      },
      {
        title: 'Conference Papers',
        items: [
          {
            title: 'Conference Paper Title',
            year: '2023',
            authors: 'You, A.',
            venue: "Conference Name (CONF'23)",
            links: [{ label: 'PDF', href: 'https://arxiv.org/abs/YOUR_ID' }],
          },
        ],
      },
    ],
  },
};

const zh: ResumeContent = {
  profile: {
    name: '何昊程',
    role: '学生',
    email: 'haocheng.he@foxmail.com',
    location: '香港，中国',
  },
  about: {
    facts: [
      { label: '邮箱', value: 'haocheng.he@foxmail.com', href: 'mailto:haocheng.he@foxmail.com' },
      { label: '所在地', value: '香港，中国' },
      { label: '方向', value: '系统、AI 与面向产品的研究' },
    ],
    highlights: [
      {
        title: '定位明确',
        description: '用简洁的名片式排版把个人定位先讲清楚。',
      },
      {
        title: '结构化叙事',
        description: '正文由数据驱动，层级和间距更容易统一。',
      },
      {
        title: '克制的动效',
        description: '用进入、悬停和页面切换的动效，而不是持续噪音。',
      },
    ],
  },
  experience: {
    summary: [
      '经历部分采用结构化时间线，不再直接依赖 Markdown 段落。',
      '这样更容易控制节奏、层次和视觉密度。',
    ],
    items: [
      {
        title: '职位名称',
        org: '公司名称',
        period: '2022 – 至今',
        location: '城市，国家',
        bullets: ['关键职责或成果', '另一条要点'],
      },
      {
        title: '上一段经历',
        org: '上一家公司',
        period: '2019 – 2022',
        location: '城市，国家',
        bullets: ['关键职责或成果'],
      },
    ],
  },
  education: {
    summary: [
      '教育经历与工作经历使用同一套时间线结构，但视觉上更安静。',
      '这样既统一，也能自然区分学术与职业两个部分。',
    ],
    items: [
      {
        title: '某方向博士',
        org: '某大学',
        period: '2015 – 2019',
        location: '城市，国家',
        bullets: ['论文题目：“你的论文题目”'],
      },
      {
        title: '某方向学士',
        org: '某大学',
        period: '2011 – 2015',
        location: '城市，国家',
        bullets: [],
      },
    ],
  },
  publications: {
    summary: [
      '发表成果按类别分组，便于先扫读、再深入。',
      '每条记录保留作者、期刊/会议和链接，信息密度更高。',
    ],
    sections: [
      {
        title: '期刊论文',
        items: [
          {
            title: '论文标题',
            year: '2024',
            authors: '你，A.，合作者，B.',
            venue: '期刊名称',
            links: [{ label: 'DOI', href: 'https://doi.org/YOUR_DOI' }],
          },
        ],
      },
      {
        title: '会议论文',
        items: [
          {
            title: '会议论文标题',
            year: '2023',
            authors: '你，A.',
            venue: '会议名称（CONF’23）',
            links: [{ label: 'PDF', href: 'https://arxiv.org/abs/YOUR_ID' }],
          },
        ],
      },
    ],
  },
};

const zhHant: ResumeContent = {
  profile: {
    name: '何浩誠',
    role: '研究 / 工程',
    email: 'your@email.com',
    location: '城市，國家',
  },
  about: {
    facts: [
      { label: '信箱', value: 'your@email.com', href: 'mailto:your@email.com' },
      { label: '所在地', value: '城市，國家' },
      { label: '方向', value: '系統、AI 與面向產品的研究' },
    ],
    highlights: [
      {
        title: '定位明確',
        description: '以簡潔的名片式排版先說清楚個人定位。',
      },
      {
        title: '結構化敘事',
        description: '正文由資料驅動，層級與間距更容易一致。',
      },
      {
        title: '克制的動效',
        description: '採用進場、懸停與頁面切換動效，而非持續噪音。',
      },
    ],
  },
  experience: {
    summary: [
      '經歷區採用結構化時間線，不再直接依賴 Markdown 段落。',
      '這樣更容易控制閱讀節奏、資訊層次與視覺密度。',
    ],
    items: [
      {
        title: '職位名稱',
        org: '公司名稱',
        period: '2022 – 至今',
        location: '城市，國家',
        bullets: ['關鍵職責或成果', '另一條重點說明'],
      },
      {
        title: '上一段經歷',
        org: '上一家公司',
        period: '2019 – 2022',
        location: '城市，國家',
        bullets: ['關鍵職責或成果'],
      },
    ],
  },
  education: {
    summary: [
      '教育經歷與工作經歷使用同一套時間線，但視覺更平穩。',
      '在保持統一的同時，仍能自然區分學術與職涯內容。',
    ],
    items: [
      {
        title: '某方向博士',
        org: '某大學',
        period: '2015 – 2019',
        location: '城市，國家',
        bullets: ['論文題目：「你的論文題目」'],
      },
      {
        title: '某方向學士',
        org: '某大學',
        period: '2011 – 2015',
        location: '城市，國家',
        bullets: [],
      },
    ],
  },
  publications: {
    summary: [
      '發表成果按類別分組，方便先掃讀、再深入閱讀。',
      '每條記錄保留作者、期刊/會議與連結，資訊密度更高。',
    ],
    sections: [
      {
        title: '期刊論文',
        items: [
          {
            title: '論文標題',
            year: '2024',
            authors: '你，A.，合作者，B.',
            venue: '期刊名稱',
            links: [{ label: 'DOI', href: 'https://doi.org/YOUR_DOI' }],
          },
        ],
      },
      {
        title: '會議論文',
        items: [
          {
            title: '會議論文標題',
            year: '2023',
            authors: '你，A.',
            venue: '會議名稱（CONF’23）',
            links: [{ label: 'PDF', href: 'https://arxiv.org/abs/YOUR_ID' }],
          },
        ],
      },
    ],
  },
};

const de: ResumeContent = {
  profile: {
    name: 'He Haocheng',
    role: 'Forschung / Engineering',
    email: 'your@email.com',
    location: 'Stadt, Land',
  },
  about: {
    facts: [
      { label: 'E-Mail', value: 'your@email.com', href: 'mailto:your@email.com' },
      { label: 'Ort', value: 'Stadt, Land' },
      { label: 'Fokus', value: 'Systeme, KI und produktnahe Forschung' },
    ],
    highlights: [
      {
        title: 'Klare Positionierung',
        description: 'Eine prägnante Profilkarte macht die Ausrichtung sofort verständlich.',
      },
      {
        title: 'Strukturierte Erzählung',
        description: 'Der Inhalt ist datengetrieben, dadurch bleiben Rhythmus und Hierarchie stabil.',
      },
      {
        title: 'Zurückhaltende Motion',
        description: 'Animationen unterstützen den Fluss, statt dauerhaft Aufmerksamkeit zu ziehen.',
      },
    ],
  },
  experience: {
    summary: [
      'Der Werdegang wird als strukturierte Zeitleiste statt als lose Absätze dargestellt.',
      'So lassen sich Lesetempo, Informationsdichte und visuelle Balance gezielt steuern.',
    ],
    items: [
      {
        title: 'Positionsbezeichnung',
        org: 'Unternehmen',
        period: '2022 – heute',
        location: 'Stadt, Land',
        bullets: ['Wichtige Verantwortung oder Ergebnis', 'Zusätzlicher Kernbeitrag'],
      },
      {
        title: 'Vorherige Rolle',
        org: 'Vorheriges Unternehmen',
        period: '2019 – 2022',
        location: 'Stadt, Land',
        bullets: ['Zentrale Verantwortung oder Wirkung'],
      },
    ],
  },
  education: {
    summary: [
      'Der Ausbildungsbereich nutzt dasselbe Timeline-Modell wie die Berufserfahrung.',
      'Damit bleibt die Seite konsistent und trennt dennoch akademische und berufliche Inhalte.',
    ],
    items: [
      {
        title: 'Promotion im Fachgebiet',
        org: 'Universität',
        period: '2015 – 2019',
        location: 'Stadt, Land',
        bullets: ['Dissertation: "Titel der Dissertation"'],
      },
      {
        title: 'Bachelor im Fachgebiet',
        org: 'Universität',
        period: '2011 – 2015',
        location: 'Stadt, Land',
        bullets: [],
      },
    ],
  },
  publications: {
    summary: [
      'Publikationen sind nach Kategorien gruppiert, um Scannen und Vertiefen zu erleichtern.',
      'Jeder Eintrag zeigt kompakt Autor:innen, Venue und weiterführende Links.',
    ],
    sections: [
      {
        title: 'Journalartikel',
        items: [
          {
            title: 'Titel des Artikels',
            year: '2024',
            authors: 'Sie, A., Co-Autor:in, B.',
            venue: 'Name der Zeitschrift',
            links: [{ label: 'DOI', href: 'https://doi.org/YOUR_DOI' }],
          },
        ],
      },
      {
        title: 'Konferenzbeiträge',
        items: [
          {
            title: 'Titel des Konferenzbeitrags',
            year: '2023',
            authors: 'Sie, A.',
            venue: 'Konferenzname (CONF’23)',
            links: [{ label: 'PDF', href: 'https://arxiv.org/abs/YOUR_ID' }],
          },
        ],
      },
    ],
  },
};

const fr: ResumeContent = {
  profile: {
    name: 'He Haocheng',
    role: 'Recherche / Ingénierie',
    email: 'your@email.com',
    location: 'Ville, Pays',
  },
  about: {
    facts: [
      { label: 'E-mail', value: 'your@email.com', href: 'mailto:your@email.com' },
      { label: 'Localisation', value: 'Ville, Pays' },
      { label: 'Focus', value: 'Systèmes, IA et recherche orientée produit' },
    ],
    highlights: [
      {
        title: 'Positionnement clair',
        description: 'Une carte de profil concise clarifie immédiatement votre proposition de valeur.',
      },
      {
        title: 'Récit structuré',
        description: 'Le contenu est piloté par des données pour garder une hiérarchie cohérente.',
      },
      {
        title: 'Motion mesurée',
        description: 'Les animations accompagnent la lecture sans créer de distraction continue.',
      },
    ],
  },
  experience: {
    summary: [
      'L’expérience est présentée sous forme de timeline structurée plutôt qu’en paragraphes bruts.',
      'Ce format facilite l’ajustement du rythme visuel et de la densité d’information.',
    ],
    items: [
      {
        title: 'Intitulé du poste',
        org: 'Entreprise',
        period: '2022 – présent',
        location: 'Ville, Pays',
        bullets: ['Responsabilité ou résultat clé', 'Autre contribution notable'],
      },
      {
        title: 'Poste précédent',
        org: 'Entreprise précédente',
        period: '2019 – 2022',
        location: 'Ville, Pays',
        bullets: ['Responsabilité ou impact principal'],
      },
    ],
  },
  education: {
    summary: [
      'La section formation utilise le même modèle de timeline que la section expérience.',
      'Cela maintient la cohérence tout en distinguant clairement académique et professionnel.',
    ],
    items: [
      {
        title: 'Doctorat dans votre domaine',
        org: 'Université',
        period: '2015 – 2019',
        location: 'Ville, Pays',
        bullets: ['Thèse : « Titre de votre thèse »'],
      },
      {
        title: 'Licence dans votre domaine',
        org: 'Université',
        period: '2011 – 2015',
        location: 'Ville, Pays',
        bullets: [],
      },
    ],
  },
  publications: {
    summary: [
      'Les publications sont regroupées par catégorie pour une lecture progressive.',
      'Chaque entrée conserve auteurs, venue et liens dans un format compact.',
    ],
    sections: [
      {
        title: 'Articles de revue',
        items: [
          {
            title: 'Titre de l’article',
            year: '2024',
            authors: 'Vous, A., Co-auteur, B.',
            venue: 'Nom de la revue',
            links: [{ label: 'DOI', href: 'https://doi.org/YOUR_DOI' }],
          },
        ],
      },
      {
        title: 'Articles de conférence',
        items: [
          {
            title: 'Titre de la publication de conférence',
            year: '2023',
            authors: 'Vous, A.',
            venue: 'Nom de la conférence (CONF’23)',
            links: [{ label: 'PDF', href: 'https://arxiv.org/abs/YOUR_ID' }],
          },
        ],
      },
    ],
  },
};

export const RESUME_CONTENT: Record<Lang, ResumeContent> = {
  en: mergeDeep(en, RESUME_CONTENT_OVERRIDES.en),
  zh: mergeDeep(zh, RESUME_CONTENT_OVERRIDES.zh),
  'zh-hant': mergeDeep(zhHant, RESUME_CONTENT_OVERRIDES['zh-hant']),
  de: mergeDeep(de, RESUME_CONTENT_OVERRIDES.de),
  fr: mergeDeep(fr, RESUME_CONTENT_OVERRIDES.fr),
};

export function getResumeContent(lang: Lang): ResumeContent {
  return RESUME_CONTENT[lang] ?? en;
}