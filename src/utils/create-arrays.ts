import * as fs from "fs"
import { letters } from "./letters"

const createArrays = async () => {
  letters.forEach((letter) => {
    const rs = fs.createReadStream(`src/dictionary/${letter}.json`)
    let res = ""
    const arr: any[] = []
    rs.on("data", (chank) => {
      res += chank
    })
    rs.on("end", () => {
      const obj = JSON.parse(res)
      for (const field in obj) {
        arr.push({ key: field, value: obj[field] })
      }
      const data = `import { TDictionaryItem } from "../types"\nexport const ${letter}_arr: TDictionaryItem[] = ${JSON.stringify(
        arr
      )}`
      fs.appendFile(`src/objects/${letter}.ts`, data, () => {
        console.log(`File ${letter} created`)
      })
      rs.close()
    })
  })
}

const createIndex = () => {
  let imports = "import { TDictionaryItem } from '../types'\n"
  let foo = "\n\nexport let let_arr: TDictionaryItem[] = []\n"
  letters.forEach((letter) => {
    imports += `import { ${letter}_arr } from './${letter}';\n`
  })
  letters.forEach((letter) => {
    foo += `let_arr = let_arr.concat(${letter}_arr)\n`
  })
  const data = imports + foo
  fs.appendFile("src/objects/index.ts", data, () => {
    console.log("Index file created")
  })
}

createArrays()
createIndex()
