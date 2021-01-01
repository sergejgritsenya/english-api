import { let_arr } from "../objects"
import { TResultItem } from "../types"

const getSample = (samples: number[]): number => {
  let sample = Math.floor(Math.random() * let_arr.length)
  if (samples.some((item) => item === sample)) {
    sample = getSample(samples)
  }
  return sample
}

const getAnswers = (sample: number): number[] => {
  const wrongs: number[] = []
  for (let i = 0; i < 3; i++) {
    wrongs.push(getSample([sample, ...wrongs]))
  }
  return [sample, ...wrongs].sort()
}

export const chooseWords = (size: number): TResultItem[] => {
  const samples: number[] = []
  for (let i = 0; i < size; i++) {
    const sample = getSample(samples)
    samples.push(sample)
  }
  return samples.map((sample) => {
    const answers = getAnswers(sample)
    const values = answers.map((answ) => {
      const value = let_arr[answ].value
      return {
        value: Array.isArray(value) ? value.join(", ") : value,
        is_correct: answ === sample,
      }
    })
    return {
      key: let_arr[sample].key,
      values,
    }
  })
}
