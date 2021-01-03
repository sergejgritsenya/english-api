import { ESettingLanguage } from "../types"

export const isReverse = (language: ESettingLanguage): boolean => {
  switch (language) {
    case ESettingLanguage.english: {
      return false
    }
    case ESettingLanguage.russian: {
      return true
    }
    default: {
      return Math.random() > 0.5
    }
  }
}
