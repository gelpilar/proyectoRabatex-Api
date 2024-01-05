import { Request, Response } from "express";
import ServiciosDeProvedores from "../servicios/provedores_servicios";




const getProvedor= (req:Request, res:Response)=>{
    try{
        ServiciosDeProvedores.getAllProvedores((err,provedores)=>
        {
            console.log(provedores)
            if(err){
                res.status(500).send("error en la base de datos")
            }else{
                res.json(provedores)
            }
        })
    }
    catch(e)
    {
        console.log("erorrrrrrrrrrrrrrr")
    }
}

export {getProvedor}