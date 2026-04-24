import type { Lang } from '../config';
import type { ResumeContent } from '../resume-data';
import type { DeepPartial } from './types';
import { enOverride } from './en';
import { zhOverride } from './zh';
import { zhHantOverride } from './zh-hant';
import { deOverride } from './de';
import { frOverride } from './fr';

export type { DeepPartial, ResumeOverride } from './types';

export const RESUME_CONTENT_OVERRIDES: Record<Lang, DeepPartial<ResumeContent>> = {
  en: enOverride,
  zh: zhOverride,
  'zh-hant': zhHantOverride,
  de: deOverride,
  fr: frOverride,
};