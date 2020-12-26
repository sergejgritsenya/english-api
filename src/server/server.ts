import cors from "cors"
import express from "express"
import { chooseWords } from "../utils"

const PORT = 4000
const app = express()

app.use(cors())

app.get("/start", (_req, res) => {
  res.send(chooseWords(25))
})

app.listen(PORT, () => console.log(`Server start on http://localhost:${PORT}`))
