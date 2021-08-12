import express from 'express'
import connectDB from './config/config.js'
import colors from 'colors'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import productRouter from './routes/productRouter.js'
import userRouter from './routes/userRoutes.js'
const app = express()
dotenv.config()

connectDB()

app.get('/', (req, res) => {
  res.send('API Running')
})

app.use(express.json())

app.use('/api/products', productRouter)
app.use('/api/users', userRouter)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} Port ${PORT}`.yellow.bold
  )
)
