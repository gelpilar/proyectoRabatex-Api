import db from "../config/mysql";


class Ventas
{
    // agregar clientes

    postCliente(cliente:any, callback:(err:Error | null, res:string| null )=> void)
    {
        db.query("Insert into clientes SET ?", cliente,(err,res)=>
        {
            if(err)
            {
                callback(err,null);
            }else
            {
                callback(null,"cliente agregado")
            }
        })
    }
    // agregar cuenta venta
    postCuentaVenta(cuenta:any, callback:(err:Error | null, res:string| null )=> void)
    {
        db.query("Insert into cuentaventa SET ?",cuenta,(err,res)=>
        {
            if(err)
            {
                callback(err,null);
            }else
            {
                callback(null,"cuenta agregada")
            }
        })
    }
    //agregar producto
    postProducto(producto:any, callback:(err:Error | null, res:string| null )=> void)
    {
        db.query("Insert into productos SET ?",producto,(err,res)=>
        {
            if(err)
            {
                callback(err,null);
            }else
            {
                callback(null,"cuenta agregada")
            }
        })
    }

    getProductos(callback:(err:Error | null, res:any[]| null )=> void)
    {
        db.query("Select * From productos",(err,res)=>
        {
            if(err)
            {
                callback(err,null);
            }else
            {
                callback(null,res)
            }
        })
    }
    // modificar estado cliente
    //nombre_producto varchar(50), monto decimal,id_cuenta int, detalle varchar (300), fecha date
    postAgregarVenta(nombre_producto:string,monto:number,id_cuenta:number,detalle:String,fecha:Date,callback:(err:Error | null, res:string| null )=> void)
    {
        db.query("CALL agregarVentaAcuenta(?,?,?,?,?)",[nombre_producto,monto,id_cuenta,detalle,fecha],(err,res)=>
        {
            if(err)
            {
                callback(err,null);
            }else
            {
                callback(null,res)
            }
        })

    }
    // get cliente con estado

    putEstadoCliente(estado:string,id:number,callback:(err:Error|null,res:string|null)=>void)
    {
        console.log(estado)
        db.query("update clientes set Estado= ? where id=?;",[estado,id],(err,res)=>
        {
            if(err)
            {
                console.log(err)
                callback(err,null);
            }else
            {
                callback(null,res)
            }
        })

    }
    getCliente(callback:(err:Error|null,res:any[]|null)=>void)
    {
        db.query("select * from clientes;",(err,res)=>
        {
            if(err)
            {
                callback(err,null);
            }else
            {
                callback(null,res)
            }
        })

    }
}


export default new Ventas();