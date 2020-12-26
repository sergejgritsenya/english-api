export type TResultItemValue = {
  value: string | string[]
  is_right: boolean
}

export type TResultItem = {
  key: string
  values: TResultItemValue[]
}
