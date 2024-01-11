import { Request, Response } from "express";
import ventas from "../servicios/ventas";


const postCliente= (req:Request,res:Response)=>
{
    let cliente= req.body;

    try{
        ventas.postCliente(cliente,(err,rest)=>
        {
            if(err){
                res.status(500).send("error en la base de datos")
            }else{
                res.json(rest)
            }
            
        })


    }catch
    {
        res.status(500).send("error en la api")
    }

}


const postCuentaVenta= (req:Request,res:Response)=>
{
    let cuenta= req.body;

    try{
        ventas.postCuentaVenta(cuenta,(err,rest)=>
        {
            if(err){
                res.status(500).send("error en la base de datos")
            }else{
                res.json(rest)
            }
            
        })


    }catch
    {
        res.status(500).send("error en la api")
    }

}


const postProducto= (req:Request,res:Response)=>
{
    let producto= req.body;

    try{
        ventas.postProducto(producto,(err,rest)=>
        {
            if(err){
                res.status(500).send("error en la base de datos")
            }else{
                res.json(rest)
            }
            
        })


    }catch
    {
        res.status(500).send("error en la api")
    }

}

const postVenta= (req:Request,res:Response)=>
{
    let producto:string= req.body.nombre_producto;
    let monto:number= req.body.monto;
    let id:number= parseInt(req.params.id);
    let detalle: string= req.body.detalle;
    let fecha: Date = req.body.fecha;

    try{
        ventas.postAgregarVenta(producto,monto,id,detalle,fecha,(err,rest)=>
        {
            if(err){
                res.status(500).send("error en la base de datos")
            }else{
                res.json(rest)
            }
            
        })


    }catch
    {
        res.status(500).send("error en la api")
    }

}

const putCliente= (req:Request,res:Response)=>
{
    let estado= req.body.estado;
    let id= parseInt(req.params.id);

    try{
        ventas.putEstadoCliente(estado,id,(err,rest)=>
        {
            if(err){
                res.status(500).send("error en la base de datos")
            }else{
                res.json(rest)
            }
            
        })


    }catch
    {
        res.status(500).send("error en la api")
    }

}


const getCliente= (req:Request,res:Response)=>
{
    let producto= req.body;

    try{
        ventas.getCliente((err,rest)=>
        {
            if(err){
                res.status(500).send("error en la base de datos")
            }else{
                res.json(rest)
            }
            
        })


    }catch
    {
        res.status(500).send("error en la api")
    }


}



export {postCliente,postCuentaVenta,postProducto,postVenta,putCliente,getCliente}
