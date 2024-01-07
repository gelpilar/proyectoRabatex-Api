import { Request, Response } from "express";
import clientes  from "../servicios/clientes";

const putCliente=(req:Request, res:Response)=>
{
    try{
        const cliente= req.body;
        clientes.putCliente(parseInt(req.params.id),cliente,(err,cliente)=>
        {

            console.log(parseInt(req.params.id))
            if(err){
                res.status(500).send("error en la base de datos")
            }else{
                res.json(cliente)
            }
           })
        }catch(e)
        {
            console.log("error")
        }
        
}

const postCliente=(req:Request, res:Response)=>
{
    try{
        const cliente= req.body;
        clientes.postCliente(cliente,(err,cliente)=>
        {
            console.log(cliente)
            
            console.log("funciona post")
            if(err){
                res.status(500).send("error en la base de datos")
            }else{
                res.json(cliente)
            }
           })
        }catch(e)
        {
            console.log("error")
        }
        
}


const getClientes= (req:Request, res:Response)=>
{
    try{
       clientes.getAllClientes((err,cliente)=>{
        console.log("funciona controlador")
        if(err){
            res.status(500).send("error en la base de datos")
        }else{
            res.json(cliente)
        }
       })
    }catch(e)
    {
        console.log("error")
    }
}

const getCliente= (req:Request, res:Response)=>
{
    try{
        
       
        
       clientes.getCliente(parseInt(req.params.id),(err,cliente)=>{
        console.log("funciona controlador")
        if(err){
            res.status(500).send("error en la base de datos")
        }else{
            res.json(cliente)
        }
       })
    }catch(e)
    {
        console.log("error")
    }
}




export {getClientes,getCliente,postCliente,putCliente}