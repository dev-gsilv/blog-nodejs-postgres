import { PrismaClient } from '@prisma/client'
import express from 'express'
import routes from "./routes"

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/health', (req, res) => {
  res.send('Health check: PASS!')
})

routes(app);

const PORT = 3000;
app.listen(PORT, () =>
  console.log('REST API server is running on port '+PORT),
)
