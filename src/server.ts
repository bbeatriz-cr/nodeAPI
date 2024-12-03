import express, {Request, Response} from 'express'
import dotenv from 'dotenv'
import apiRoutes from './routes/api'

dotenv.config()

const server = express()

server.use(express.urlencoded({extended:true}))
server.listen(process.env.PORT)
//usando a rota api.ts
server.use(apiRoutes)


//Pag não encontrada
server.use((req:Request, res:Response)=>{
    res.status(404)
    res.json({error:'endpoint não encontrada' })
})