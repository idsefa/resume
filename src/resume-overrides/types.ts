import type { ResumeContent } from '../resume-data';

export type DeepPartial<T> = T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

export type ResumeOverride = DeepPartial<ResumeContent>;