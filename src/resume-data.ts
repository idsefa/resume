import type { Lang } from './config';

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
    name: '何浩诚',
    role: '研究 / 工程',
    email: 'your@email.com',
    location: '城市，国家',
  },
  about: {
    facts: [
      { label: '邮箱', value: 'your@email.com', href: 'mailto:your@email.com' },
      { label: '所在地', value: '城市，国家' },
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

export const RESUME_CONTENT: Record<Lang, ResumeContent> = {
  en,
  zh,
  de: en,
  fr: en,
};

export function getResumeContent(lang: Lang): ResumeContent {
  return RESUME_CONTENT[lang] ?? en;
}