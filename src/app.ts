import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import 'dotenv/config'

import helloRouter from '../routes/router.js'

config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/ping", (req, res) => {
    res.json({message: "ping"})
})

app.use(helloRouter)

export default app


