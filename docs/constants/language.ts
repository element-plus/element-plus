export enum Language {
  /** Chinese */
  CN = 'zh-CN',
  /** English */
  EN = 'en-US',

  // We only support zh-CN and en-US for now.
  /** Spanish */
  // ES = 'es',
  /** French */
  // FR = 'fr-FR',
  /** Japanese */
  // JP = 'jp',
}

export const defaultLang = Language.EN

export const langPack = [Language.CN, Language.EN]
