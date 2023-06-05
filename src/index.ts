import { PrismaClient } from '@prisma/client'
import express from 'express'
import routes from "./routes"

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

routes(app);

const port = 3000;
app.listen(port, () =>
  console.log('REST API server ready at port: '+port),
)
