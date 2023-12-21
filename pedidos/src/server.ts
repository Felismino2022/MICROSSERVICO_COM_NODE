import express from 'express'

import './infra/provider/kafka/consumers'

const app = express()

const PORT = process.env.PORT ?? 3002

app.use(express.json())

app.listen(PORT, () => console.log(`servidor pedido rodando na porta ${PORT}`))