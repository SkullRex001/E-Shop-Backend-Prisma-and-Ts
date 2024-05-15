import express, {Express , Request , Response} from 'express';
import { PORT } from './secrets';
import rootRouter from './routes';
import { PrismaClient } from '@prisma/client';
import { errorMiddleware } from './middlewares/errors';

export const Client = new PrismaClient()


const app:Express = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.use('/api' , rootRouter)

app.use(errorMiddleware)

app.listen(PORT , ()=>{
    console.log("Port 3000 is running")
})