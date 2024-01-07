import db from "../config/mysql";
import cuentaProvedor from "../interfaces/cuentaprovedores";


class servocioCuentaProvedor{
    // agregar compra a cuenta x 
    // abrir cuenta x 
    // cerrar cuenta x
    // obtener una cuenta x
    // obtener todas las cuentas de un cliente x


   postCuentaProvedor(cuenta:any, callback:(err:Error| null, result:string|null)=>void)
   {
    db.query("insert into cuentaProvedor SET ?",cuenta,(err,result)=>
    {
        if(err)
            {
                callback(err,null)
            }else{
                callback(null,"se agrego cuenta")
            }
    })
   }

   postAgregarCompraACuenta(compra:any, callback:(err:Error|null, result: string|null)=>void)
   {
    db.query("insert into compra SET ?",compra,(err,result)=>{
        if(err)
        {
            callback(err,null)
        }else{
            callback(null,"se agrego a cuenta")
        }
    })
   }

   postModificarCuenta(id:number,callback:(err:Error|null, result: string|null)=>void)
   {
    db.query("update CuentaProvedor SET Estado= ? where id = ?",["cerrado",id],(err,result)=>{
        if(err)
        {
            callback(err,null)
        }else{
            callback(null,"se agrego a cuenta")
        }
    })
   }

   getCuentas(id:number,callback:(err:Error|null, result: any[]|null)=>void)
   {
    db.query("Select * from cuenta where Id_provedor=?",id,(err,result)=>{
        if(err)
        {
            callback(err,null)
        }else{
            callback(null,result)
        }
    })
   }
   getCuenta(id:number,callback:(err:Error|null, result: any[]|null)=>void)
   {
    db.query("Select * from cuenta where Id=?",id,(err,result)=>{
        if(err)
        {
            callback(err,null)
        }else{
            callback(null,result)
        }
    })
   }

};

export default new servocioCuentaProvedor();