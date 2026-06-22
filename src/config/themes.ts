// Theme system configuration
// Each theme defines colors, layout, effects, CSS behavior, AND page structure

import type { LayoutMode } from '../config';

/** Which cursor style a theme uses */
export type CursorStyle = 'trail' | 'follower' | 'square-follower' | 'none';

/** Effects profile for a theme */
export interface ThemeEffects {
  cursor: CursorStyle;
  pageTransition: boolean;
  parallax: boolean;
  countUp: boolean;
  revealStyle: 'slide-up' | 'fade' | 'zoom' | 'slide-left';
  /** Glitch text effect on hero title hover */
  glitch: boolean;
  /** Noise/grain texture overlay */
  noise: boolean;
  /** CRT scanline overlay */
  scanlines: boolean;
  /** Magnetic cursor attraction to interactive elements */
  magnetic: boolean;
  /** Floating/drifting cards with subtle animation */
  floating: boolean;
}

/** Maps each resume role to a recommended theme */
export const ROLE_THEME_MAP: Record<string, string> = {
  default: 'light-tech',
  aviation: 'arctic-tech',
  consulting: 'classic',
  engineering: 'dark-olive',
  ai: 'cyber-neon',
  quant: 'midnight',
};

/**
 * Page layout variant — controls the HTML structure of the page:
 * - 'centered':    Current light-tech hero + pill tabs (clean, modern)
 * - 'classic':     Current classic hero + arrow-stack + list layout
 * - 'dramatic':    Full-bleed hero with decorative elements, bold section headers
 * - 'glass':       Overlapping sections with frosted/glass effect, offset cards
 * - 'zen':         Ultra-minimal, single column, no cards, pure typography
 */
export type PageVariant = 'centered' | 'classic' | 'dramatic' | 'glass' | 'zen' | 'whiteboard';

/** Full theme profile */
export interface Theme {
  id: string;
  label: string;
  labelZh: string;
  icon: string;
  description: string;
  /** Which page layout structure to use */
  layout: LayoutMode;
  /** Page structure variant */
  pageVariant: PageVariant;
  /** JS behavior effects */
  effects: ThemeEffects;
  /** Body class suffix for additional theme-specific CSS */
  bodyClass: string;
}

export const THEMES: Theme[] = [
  // ====== EXISTING 5 THEMES ======
  {
    id: 'light-tech',
    label: 'Light Tech',
    labelZh: '浅色科技',
    icon: '☀️',
    description: 'Clean, modern light theme with indigo accent',
    layout: 'light-tech',
    pageVariant: 'centered',
    bodyClass: 'theme-light-tech',
    effects: {
      cursor: 'trail',
      pageTransition: true,
      parallax: false,
      countUp: true,
      revealStyle: 'slide-up',
      glitch: false,
      noise: false,
      scanlines: false,
      magnetic: false,
      floating: true,
    },
  },
  {
    id: 'classic',
    label: 'Classic',
    labelZh: '经典',
    icon: '📜',
    description: 'Warm cream background with blue accent',
    layout: 'classic',
    pageVariant: 'classic',
    bodyClass: 'theme-classic',
    effects: {
      cursor: 'trail',
      pageTransition: true,
      parallax: false,
      countUp: true,
      revealStyle: 'slide-up',
      glitch: false,
      noise: false,
      scanlines: false,
      magnetic: false,
      floating: true,
    },
  },
  {
    id: 'dark-olive',
    label: 'Dark Olive',
    labelZh: '暗色橄榄',
    icon: '🌿',
    description: 'Dark theme with olive green — inspired by Oliver Tao',
    layout: 'light-tech',
    pageVariant: 'dramatic',
    bodyClass: 'theme-dark-olive',
    effects: {
      cursor: 'follower',
      pageTransition: true,
      parallax: true,
      countUp: true,
      revealStyle: 'fade',
      glitch: false,
      noise: false,
      scanlines: false,
      magnetic: false,
      floating: true,
    },
  },
  {
    id: 'midnight',
    label: 'Midnight',
    labelZh: '午夜',
    icon: '🌙',
    description: 'Deep navy dark theme with sky blue accent',
    layout: 'light-tech',
    pageVariant: 'centered',
    bodyClass: 'theme-midnight',
    effects: {
      cursor: 'follower',
      pageTransition: true,
      parallax: true,
      countUp: true,
      revealStyle: 'slide-left',
      glitch: false,
      noise: false,
      scanlines: false,
      magnetic: false,
      floating: true,
    },
  },
  {
    id: 'rose',
    label: 'Rose',
    labelZh: '玫瑰',
    icon: '🌹',
    description: 'Warm rose-tinted light theme',
    layout: 'classic',
    pageVariant: 'classic',
    bodyClass: 'theme-rose',
    effects: {
      cursor: 'trail',
      pageTransition: true,
      parallax: false,
      countUp: true,
      revealStyle: 'slide-up',
      glitch: false,
      noise: false,
      scanlines: false,
      magnetic: false,
      floating: true,
    },
  },

  // ====== 8 NEW THEMES ======
  {
    id: 'cyber-neon',
    label: 'Cyber Neon',
    labelZh: '赛博霓虹',
    icon: '🌆',
    description: 'Cyberpunk magenta-cyan-yellow neon on deep dark',
    layout: 'light-tech',
    pageVariant: 'dramatic',
    bodyClass: 'theme-cyber-neon',
    effects: {
      cursor: 'square-follower',
      pageTransition: true,
      parallax: true,
      countUp: true,
      revealStyle: 'slide-up',
      glitch: false,
      noise: false,
      scanlines: false,
      magnetic: false,
      floating: true,
    },
  },
  {
    id: 'frosted-glass',
    label: 'Frosted Glass',
    labelZh: '毛玻璃',
    icon: '🫧',
    description: 'Frosted glassmorphism with violet tones',
    layout: 'light-tech',
    pageVariant: 'glass',
    bodyClass: 'theme-frosted-glass',
    effects: {
      cursor: 'trail',
      pageTransition: true,
      parallax: false,
      countUp: true,
      revealStyle: 'fade',
      glitch: false,
      noise: false,
      scanlines: false,
      magnetic: false,
      floating: true,
    },
  },
  {
    id: 'warm-retro',
    label: 'Warm Retro',
    labelZh: '暖色复古',
    icon: '🕰️',
    description: '1970s amber/warm retro with serif typography',
    layout: 'classic',
    pageVariant: 'classic',
    bodyClass: 'theme-warm-retro',
    effects: {
      cursor: 'trail',
      pageTransition: true,
      parallax: false,
      countUp: true,
      revealStyle: 'slide-up',
      glitch: false,
      noise: false,
      scanlines: false,
      magnetic: false,
      floating: true,
    },
  },
  {
    id: 'arctic-tech',
    label: 'Arctic Tech',
    labelZh: '极寒科技',
    icon: '🧊',
    description: 'Cold blueprint-style with ice blue and grid lines',
    layout: 'light-tech',
    pageVariant: 'centered',
    bodyClass: 'theme-arctic-tech',
    effects: {
      cursor: 'follower',
      pageTransition: true,
      parallax: true,
      countUp: true,
      revealStyle: 'slide-left',
      glitch: false,
      noise: false,
      scanlines: false,
      magnetic: false,
      floating: true,
    },
  },
  {
    id: 'forest-canopy',
    label: 'Forest Canopy',
    labelZh: '森林树冠',
    icon: '🌲',
    description: 'Deep mossy forest with organic green tones',
    layout: 'classic',
    pageVariant: 'glass',
    bodyClass: 'theme-forest-canopy',
    effects: {
      cursor: 'follower',
      pageTransition: true,
      parallax: true,
      countUp: true,
      revealStyle: 'fade',
      glitch: false,
      noise: false,
      scanlines: false,
      magnetic: false,
      floating: true,
    },
  },
  {
    id: 'abyssal-depths',
    label: 'Abyssal Depths',
    labelZh: '深海深渊',
    icon: '🐋',
    description: 'Deep ocean bioluminescent cyan on black-blue',
    layout: 'light-tech',
    pageVariant: 'dramatic',
    bodyClass: 'theme-abyssal-depths',
    effects: {
      cursor: 'follower',
      pageTransition: true,
      parallax: true,
      countUp: true,
      revealStyle: 'slide-up',
      glitch: false,
      noise: false,
      scanlines: false,
      magnetic: false,
      floating: true,
    },
  },
  {
    id: 'crimson-noir',
    label: 'Crimson Noir',
    labelZh: '暗红哥特',
    icon: '🥀',
    description: 'Gothic crimson and dark gold on black',
    layout: 'classic',
    pageVariant: 'classic',
    bodyClass: 'theme-crimson-noir',
    effects: {
      cursor: 'trail',
      pageTransition: true,
      parallax: false,
      countUp: true,
      revealStyle: 'zoom',
      glitch: false,
      noise: false,
      scanlines: false,
      magnetic: false,
      floating: true,
    },
  },
  {
    id: 'matcha-zen',
    label: 'Matcha Zen',
    labelZh: '抹茶极简',
    icon: '🍵',
    description: 'Minimalist Japanese wabi-sabi with matcha green',
    layout: 'classic',
    pageVariant: 'zen',
    bodyClass: 'theme-matcha-zen',
    effects: {
      cursor: 'none',
      pageTransition: true,
      parallax: false,
      countUp: true,
      revealStyle: 'fade',
      glitch: false,
      noise: false,
      scanlines: false,
      magnetic: false,
      floating: false,
    },
  },

  // ====== 3 NEW THEMES (2026-06) ======
  {
    id: 'neo-brutal',
    label: 'Neo Brutal',
    labelZh: '新野蛮主义',
    icon: '⬛',
    description: 'Bold borders, raw typography, high contrast — 2025-26 trend',
    layout: 'classic',
    pageVariant: 'classic',
    bodyClass: 'theme-neo-brutal',
    effects: {
      cursor: 'follower',
      pageTransition: true,
      parallax: false,
      countUp: true,
      revealStyle: 'slide-up',
      glitch: true,
      noise: true,
      scanlines: false,
      magnetic: true,
      floating: true,
    },
  },
  {
    id: 'catppuccin',
    label: 'Catppuccin',
    labelZh: '卡布奇诺',
    icon: '🐱',
    description: 'Soothing pastel dark theme based on Catppuccin Mocha palette',
    layout: 'light-tech',
    pageVariant: 'centered',
    bodyClass: 'theme-catppuccin',
    effects: {
      cursor: 'trail',
      pageTransition: true,
      parallax: false,
      countUp: true,
      revealStyle: 'fade',
      glitch: false,
      noise: true,
      scanlines: false,
      magnetic: false,
      floating: true,
    },
  },
  {
    id: 'dracula',
    label: 'Dracula',
    labelZh: '德古拉',
    icon: '🧛',
    description: 'Iconic purple-tinted dark theme — the most famous theme ever',
    layout: 'light-tech',
    pageVariant: 'centered',
    bodyClass: 'theme-dracula',
    effects: {
      cursor: 'follower',
      pageTransition: true,
      parallax: true,
      countUp: true,
      revealStyle: 'slide-left',
      glitch: false,
      noise: false,
      scanlines: true,
      magnetic: true,
      floating: true,
    },
  },
  {
    id: 'whiteboard',
    label: 'Whiteboard',
    labelZh: '无限白板',
    icon: '📋',
    description: 'Infinite canvas style — sticky notes, pins, hand-drawn feel',
    layout: 'classic',
    pageVariant: 'whiteboard',
    bodyClass: 'theme-whiteboard',
    effects: {
      cursor: 'trail',
      pageTransition: true,
      parallax: false,
      countUp: true,
      revealStyle: 'fade',
      glitch: false,
      noise: false,
      scanlines: false,
      magnetic: true,
      floating: true,
    },
  },
];

export const DEFAULT_THEME = 'light-tech';
export const STORAGE_KEY = 'resume-theme';

export type ThemeId = (typeof THEMES)[number]['id'];

/** Lookup a theme by id */
export function getTheme(id: string): Theme {
  return THEMES.find(t => t.id === id) ?? THEMES[0];
}
