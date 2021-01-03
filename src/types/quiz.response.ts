export type TAnswerItem = {
  answer: string | string[]
  is_correct: boolean
}

type TQuestionItem = {
  question: string
  answers: TAnswerItem[]
}

export type TQuiz = TQuestionItem[]
