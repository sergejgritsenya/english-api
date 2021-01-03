export enum ESettingLanguage {
  english = "english",
  russian = "russian",
  mixed = "mixed",
}

export type TSettings = {
  size: number
  language: ESettingLanguage
}
