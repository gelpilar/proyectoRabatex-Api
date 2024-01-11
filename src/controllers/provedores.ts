import { Request, Response, response } from "express";
import provedores from "../servicios/provedores";


const postProvedor = (req:Request,res:Response)=>{
    try{
        let prove= req.body;
        provedores.postProvedor(prove,(err,response)=>
        {
            if(err){
                res.status(500).send("error en la base de datos")
            }else{
                res.json(response)
            }
        })
    }catch(err)
    {
        res.status(500).send("error en la api")
    }
}

const postCompra = (req:Request,res:Response)=>{
    try{
        let nombre_materia: string = req.body.nombre_materia;
        let monto: number = req.body.monto;
        let detalle:string= req.body.dtalle;
        let id:number= parseInt(req.params.id)

        provedores.postAgregarCompraAcuenta(nombre_materia,monto,id,detalle,(err,response)=>
        {
            if(err){
                res.status(500).send("error en la base de datos")
            }else{
                res.json(response)
            }
        })
    }catch(err)
    {
        res.status(500).send("error en la api")
    }
}

const postMateriaPrima = (req:Request,res:Response)=>{
    try{
       

        let materia= req.body;
        provedores.postMateriaPrima(materia,(err,response)=>
        {
            if(err){
                res.status(500).send("error en la base de datos")
            }else{
                res.json(response)
            }
        })
    }catch(err)
    {
        res.status(500).send("error en la api")
    }
}
const postagregarCuentaAProvedor= (req:Request,res:Response)=>{
    try{
        let fecha_inicio: Date = req.body.fecha_inicio;
        let monto: number = req.body.monto;
        let fecha_fin: Date = req.body.fecha_fin;
        let id:number= parseInt(req.params.id)

        provedores.postAgregarCuentaaProvedor(id,monto,fecha_inicio,fecha_fin,(err,response)=>
        {
            if(err){
                res.status(500).send("error en la base de datos")
            }else{
                res.json(response)
            }
        })
    }catch(err)
    {
        res.status(500).send("error en la api")
    }
}
const putcerrarCuentaProve= (req:Request,res:Response)=>{
    try{
       
        let id:number= parseInt(req.params.id)

        provedores.putCerrarCuenta(id,(err,response)=>
        {
            if(err){
                res.status(500).send("error en la base de datos")
            }else{
                res.json(response)
            }
        })
    }catch(err)
    {
        res.status(500).send("error en la api")
    }
}


const getProvedores=(req:Request,res:Response)=>{
    try{
       
       

        provedores.getProvedores((err,response)=>
        {
            if(err){
                res.status(500).send("error en la base de datos")
            }else{
                res.json(response)
            }
        })
    }catch(err)
    {
        res.status(500).send("error en la api")
    }
}
const getProvedor=(req:Request,res:Response)=>{
    try{
       
        let id:number= parseInt(req.params.id)

        provedores.getProvedor(id,(err,response)=>
        {
            if(err){
                res.status(500).send("error en la base de datos")
            }else{
                res.json(response)
            }
        })
    }catch(err)
    {
        res.status(500).send("error en la api")
    }
}

const getcuentas=(req:Request,res:Response)=>{
    try{
       
        let id:number= parseInt(req.params.id)

        provedores.getCuentas(id,(err,response)=>
        {
            if(err){
                res.status(500).send("error en la base de datos")
            }else{
                res.json(response)
            }
        })
    }catch(err)
    {
        res.status(500).send("error en la api")
    }
}


const getcompras=(req:Request,res:Response)=>{
    try{
       
        let id:number= parseInt(req.params.id)

        provedores.getComprasDeUnaCuenta(id,(err,response)=>
        {
            if(err){
                res.status(500).send("error en la base de datos")
            }else{
                res.json(response)
            }
        })
    }catch(err)
    {
        res.status(500).send("error en la api")
    }
}


export {postMateriaPrima,postProvedor,postCompra,postagregarCuentaAProvedor,putcerrarCuentaProve,getProvedor,getProvedores,getcompras,getcuentas}