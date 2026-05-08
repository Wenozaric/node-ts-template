import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import 'dotenv/config'

config()

const port = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())
app.use("/ping", (req, res) => {
    res.json({message: "ping"})
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


