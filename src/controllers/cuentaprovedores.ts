import { Request, Response } from "express";
import cuentaprovedores from "../servicios/cuentaprovedores";


const postCuenta= (req:Request,res:Response)=>
{
    try{
        const cuenta= req.body;

        cuentaprovedores.postCuentaProvedor(cuenta,(err,respu)=>
        {
            if(err){
                res.status(500).send("error en la base de datos")
            }else{
                res.json(respu)
            }
        })
        
    }catch(e)
    {
        console.log("error")
    }
}

const postCompra= (req:Request, res:Response)=>
{
    try{
        const compra= req.body;

        cuentaprovedores.postAgregarCompraACuenta(compra,(err,respu)=>
        {
            if(err){
                res.status(500).send("error en la base de datos")
            }else{
                res.json(respu)
            }
        })
        
    }catch(e)
    {
        console.log("error")
    }
}

const putCuenta= (req:Request, res:Response)=>
{
    try{
        const id= parseInt(req.params.id);

        cuentaprovedores.postModificarCuenta(id,(err,respu)=>
        {
            if(err){
                res.status(500).send("error en la base de datos")
            }else{
                res.json(respu)
            }
        })
        
    }catch(e)
    {
        console.log("error")
    }

}

const getCuenta= (req:Request, res:Response)=>
{
    try{
        const id= parseInt(req.params.id);

        cuentaprovedores.getCuenta(id,(err,respu)=>
        {
            if(err){
                res.status(500).send("error en la base de datos")
            }else{
                res.json(respu)
            }
        })
        
    }catch(e)
    {
        console.log("error")
    }

}
const getCuentas= (req:Request, res:Response)=>
{
    try{
        const id= parseInt(req.params.id);

        cuentaprovedores.getCuentas(id,(err,respu)=>
        {
            if(err){
                res.status(500).send("error en la base de datos")
            }else{
                res.json(respu)
            }
        })
        
    }catch(e)
    {
        console.log("error")
    }

}

export {postCuenta, postCompra,putCuenta,getCuenta,getCuentas }