declare interface Window {
  __applyThemeEffects?: (themeId: string) => void;
  __parallaxCleanup?: (() => void) | null;
}

declare interface Element {
  _cleanup?: (() => void) | null;
}
