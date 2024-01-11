import { Request, Response } from "express";
import gastos from "../servicios/gastos";


const postGastos= (req:Request, res:Response)=>{

    try{
        let nombre:string= req.body.nombre;
        let detalle:string = req.body.detalle;
        let monto:number= req.body.monto;
        let fecha:Date= req.body.fecha;
        
        gastos.postGastos(nombre,detalle,monto,fecha,(err,resu)=>
        {

            
            if(err){
                console.log(err)
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


const getGastos= (req:Request, res:Response)=>
{
    try{
        gastos.getGastos((err,resu)=>
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

export {postGastos,getGastos}