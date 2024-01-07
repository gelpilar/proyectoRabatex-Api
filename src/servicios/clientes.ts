import db from "../config/mysql";
import cliente from "../interfaces/clientes";


class ServiciosDeCliente{

    putCliente(id:number,cliente:any, callback:(err:Error|null, result:string|null)=>void)
    {
        console.log(cliente)
        db.query('Update clientes SET ? where id= ?', [cliente,id], (err,results)=>
        {
            console.log("funciona agregar cliente")
            if(err)
            {
                callback(err,null)
            }else{
                callback(null,"Funciono")
            }
        })
    }

    postCliente(cliente:any, callback:(err:Error|null, result:any[]|null)=>void)
    {
        db.query('insert into clientes SET ?', cliente, (err,results)=>
        {
            console.log("funciona agregar cliente")
            if(err)
            {
                callback(err,null)
            }else{
                callback(null,results)
            }
        })
    }
    getAllClientes(callback:(err:Error|null, results:any[]|null )=>void)
    {
        db.query('Select * FROM clientes',(err,results)=>
        {
            console.log("funciona cliente all")
            if(err)
            {
                callback(err,null);                
            }else{
                callback(null,results);
            }
        })
    }


    getCliente(idCliente:number,callback:(err:Error|null, results:any|null)=>void)
    {
        console.log(idCliente);
        db.query('SELECT * FROM clientes WHERE id= ?',[idCliente],(err,result)=>
        {
            if(err)
            {
                callback(err,null);
            }else{
                ;
                callback(null,result)
            }
        })
    }
   

}

export default new ServiciosDeCliente();