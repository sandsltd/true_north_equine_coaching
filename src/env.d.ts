/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly EMAIL_HOST: string;
  readonly EMAIL_PORT: string;
  readonly EMAIL_USER: string;
  readonly EMAIL_PASS: string;
  readonly EMAIL_FROM: string;
  readonly EMAIL_TO: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
} 