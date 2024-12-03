import {Request, Response} from 'express'
import { Frase } from '../models/Frase'

export const ping = (req:Request, res:Response)=>{
    res.json({pong:true})
}

export const random = (req:Request, res:Response)=>{
    let nRand:number = Math.floor(Math.random() * 10)
    res.json({number: nRand})
}

export const nome = (req:Request, res:Response)=>{
    let nome: string = req.params.nome
    res.json({nome: `Você enviou o nome: ${nome}`})
}

export const criarFrase = async (req:Request, res:Response)=>{
    let {autor, texto} = req.body
    let novaFrase = await Frase.create({ autor,texto})
    
    //Os dados serão recebidos no corpo da requisição
    //console.log((req.body))
    res.json({id: novaFrase.id, autor, texto})
}

export const listarFrases = async (req:Request, res:Response)=>{
    let frases = await Frase.findOne()  //findAll

    res.json({frases})
}

