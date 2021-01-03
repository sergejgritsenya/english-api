import bodyParser from "body-parser"
import cors from "cors"
import express from "express"
import { TSettings } from "../types"
import { chooseWords } from "../utils"

const PORT = 4000
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post("/start", (req, res) => {
  const settings = req.body as TSettings
  res.send(chooseWords(settings))
})

app.listen(PORT, () => console.log(`Server start on http://localhost:${PORT}`))
