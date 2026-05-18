import type { Lang } from '../config';
import type { ResumeContent } from '../resume-data';
import type { DeepPartial } from './types';
import { enOverride } from './en';
import { zhOverride } from './zh';
import { zhHantOverride } from './zh-hant';
import { deOverride } from './de';
import { frOverride } from './fr';
import { enCareerOverride } from './en-career';
import { zhCareerOverride } from './zh-career';
import { zhHantCareerOverride } from './zh-hant-career';
import { deCareerOverride } from './de-career';
import { frCareerOverride } from './fr-career';

export type { DeepPartial, ResumeOverride } from './types';

/**
 * Personal/Homepage-focused version
 * Emphasizes your story, cross-domain thinking, and passion for operations
 */
export const RESUME_CONTENT_OVERRIDES: Record<Lang, DeepPartial<ResumeContent>> = {
  en: enOverride,
  zh: zhOverride,
  'zh-hant': zhHantOverride,
  de: deOverride,
  fr: frOverride,
};

/**
 * Career/Job-seeking focused version
 * Emphasizes your interest in aviation operations, digital transformation, airport management, and consulting
 * To use this version, update the import in resume-data.ts:
 *   import { RESUME_CONTENT_OVERRIDES_CAREER as RESUME_CONTENT_OVERRIDES } from './resume-overrides/index';
 */
export const RESUME_CONTENT_OVERRIDES_CAREER: Record<Lang, DeepPartial<ResumeContent>> = {
  en: enCareerOverride,
  zh: zhCareerOverride,
  'zh-hant': zhHantCareerOverride,
  de: deCareerOverride,
  fr: frCareerOverride,
};