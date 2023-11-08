import FilmeRepositorioInterface from "../../aplicacao/filme-repositorio-interface";
import mongoose from 'mongoose'
export default class BancoMongoDB implements FilmeRepositorioInterface{
    constructor(){
        try{
            mongoose.connect(process.env.MONGODB_URL || '')
            console.log("Conectado ao banco de dados")
        }catch(erro){
            console.log(erro)
        }
    }
    public salvar(filme:Filme): Promise<boolean> {
        return new Promise((resolve,reject)=>{
            reject(false)
        })
    }
}
type Filme = {
    id:number,
    titulo:string,
    descricao:string,
    foto:string
}