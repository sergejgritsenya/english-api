export type TResultItemValue = {
  value: string | string[]
  is_correct: boolean
}

export type TResultItem = {
  key: string
  values: TResultItemValue[]
}
