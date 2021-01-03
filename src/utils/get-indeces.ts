const getIndex = (length: number, indeces: number[]): number => {
  let index = Math.floor(Math.random() * length)
  if (indeces.includes(index)) {
    index = getIndex(length, indeces)
  }
  return index
}

export const getIndeces = (size: number, length: number, indeces: number[] = []): number[] => {
  for (let i = 0; i < size; i++) {
    indeces.push(getIndex(length, indeces))
  }
  return indeces
}
