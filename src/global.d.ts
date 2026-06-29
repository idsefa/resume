declare interface Window {
  resumeSite?: {
    applyThemeEffects?: (themeId: string) => void;
    themeEffectsCleanup?: (() => void) | null;
    layoutCleanup?: (() => void) | null;
  };
}
