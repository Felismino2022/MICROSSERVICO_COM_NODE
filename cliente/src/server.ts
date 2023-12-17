import express from 'express'
import { router } from './infra/route'

const app = express()

const PORT = process.env.PORT ?? 3001

app.use(express.json())
app.use(router)

app.listen(PORT, () => console.log(`servidor cliente rodando na porta ${PORT}`))