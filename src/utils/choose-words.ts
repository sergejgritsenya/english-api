import { dictionary } from "../dictionary"
import { TAnswerItem, TQuiz, TSettings } from "../types"
import { getIndeces } from "./get-indeces"
import { isReverse } from "./is-reverse"

const getAnswers = (index: number, is_reverse: boolean): TAnswerItem[] => {
  const indeces = getIndeces(3, dictionary.length, [index])

  return indeces.sort().map((idx) => ({
    answer: is_reverse ? dictionary[idx].english : dictionary[idx].russian,
    is_correct: idx === index,
  }))
}

export const chooseWords = (settings: TSettings): TQuiz => {
  const indeces = getIndeces(settings.size, dictionary.length)

  return indeces.map((index) => {
    const is_reverse = isReverse(settings.language)
    return {
      question: is_reverse ? dictionary[index].russian : dictionary[index].english,
      answers: getAnswers(index, is_reverse),
    }
  })
}
