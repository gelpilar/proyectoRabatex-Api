import { Request, Response } from "express";
import Registro from "../servicios/Registro";

const getRegistros=(req:Request,res:Response)=>
{
    try{
        Registro.getRegistros((err,resu)=>
        {

            
            if(err){
              
                res.status(500).send("error en la base de datos")
            }else{
                res.json(resu)
            }
        })
    }catch(e)
    {
        console.log("error en la api")
    }
}
export {getRegistros};