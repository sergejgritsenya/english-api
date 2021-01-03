import * as fs from "fs"
import { TDictionaryItem } from "../types"
import { letters } from "./letters"

export const createArrays = async () => {
  const arr: TDictionaryItem[] = []
  letters.forEach((letter, index) => {
    const readble_stream = fs.createReadStream(`src/dictionary/${letter}.json`)
    let res = ""
    readble_stream.on("data", (chank) => {
      res += chank
    })
    readble_stream.on("end", () => {
      const obj = JSON.parse(res)
      for (const field in obj) {
        arr.push({
          english: field,
          russian: Array.isArray(obj[field]) ? obj[field].join(", ") : obj[field],
        })
      }

      if (index === letters.length - 1) {
        const filename = "src/dictionary/index.ts"
        const data = `import { TDictionaryItem } from "../types"\nexport const dictionary: TDictionaryItem[] = ${JSON.stringify(
          arr
        )}`
        fs.appendFile(filename, data, () => {
          console.log(`Dictionary array created`)
        })
      }

      readble_stream.close()
    })
  })
}
