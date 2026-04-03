/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SCREENSHOTONE_ACCESS_KEY?: string;
  readonly VITE_SCREENSHOTONE_MOBILE_DELAY?: string;
  readonly VITE_SCREENSHOTONE_CACHE_TTL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
