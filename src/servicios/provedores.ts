import db from "../config/mysql";

class ServicioProvedores{

    postProvedor(provedor:any,callback:(err:Error|null, res:string|null)=>void)
    {
        db.query("insert into provedores SET ?", provedor,(err,res)=>
        {
            if(err)
            {
                callback(err,null);
            }else
            {
                callback(null, "se agrego un nuevo provedor")
            }
        })
    }

    getProvedores(callback:(err:Error|null, res: any[]|null)=>void)
    {
        db.query("Select nombre,estado from provedores",(err,res)=>
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
    getProvedor(id:number,callback:(err:Error|null, res: any[]|null)=>void)
    {
        db.query("Select nombre,estado from provedores where Id= ?",id,(err,res)=>
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

    getCuentas(id_prove:number,callback:(err:Error|null, res:any[]|null)=>void)
    {
        let query= "select c.Id,p.Nombre,c.fecha_inicio as 'fecha inicio', c.fecha_fin as 'fecha final', c.estado, c.monto from cuentaprovedor as c join provedores as p  on p.Id= c.Id_provedor where p.Id = ?;"
        db.query(query,id_prove,(err,res)=>
        {
            if(err)
            {
                callback(err,null);
            }else
            {
                callback(null,res);
            }
        })

    }

    getComprasDeUnaCuenta(id_cuenta:number,callback:(err:Error|null,res:any[]|null)=>void)
    {
        let query=("select m.nombre, c.detalle, p.monto from materiaprima as m" +
        " join compra as c"+
        " on c.Id_materiaPrima= m.Id"+
        " join precios as p "+
       " on c.Id_Precio = p.Id"+
        " join cuentaprovedor as cu"+
        " on c.id_cuenta= cu.Id"+
        " where cu.id= ?;")

        db.query(query,id_cuenta,(err,res)=>
        {
            if(err)
            {
                callback(err,null);
            }else
            {
                callback(null,res);
            }
        })

    }

    postAgregarCompraAcuenta(nombre_materia:string, monto: number, id_cuenta:number,detalle:string, callback:(err:Error|null, res:string|null)=>void)
    {

        let query= "CALL compraaCuentaProvedor(?,?,?,?)";

        db.query(query,[nombre_materia,monto,id_cuenta,detalle],(err,res)=>
        {
            if(err)
            {
                callback(err,null);
                console.log(err)
            }else
            {
                callback(null,res);
                
            }
        })
    }

    postAgregarCuentaaProvedor(id_prove:number,monto:number, fecha_inicio:Date, fecha_fin:Date, callback:(err:Error|null, res:string|null)=>void)
    {
        let query= "CALL agregarCuentaaProvedor(?,?,?,?)";

        db.query(query,[id_prove,monto,fecha_inicio,fecha_fin],(err,res)=>
        {
            if(err)
            {
                callback(err,null);
            }else
            {
                callback(null,res);
            }
        })
        
    }

    putCerrarCuenta(id_cuenta:number, callback:(err:Error|null, res:string|null)=>void)
    {
        console.log(id_cuenta)
        let query= "CALL cerraraCuentaProvedor(?)";

        db.query(query,id_cuenta,(err,res)=>
        {
            if(err)
            {
                console.log(err)
                callback(err,null);
                
            }else
            {
                callback(null,res);
            }
        })
        
    }


    postMateriaPrima(materia:any,callback:(err:Error|null, res:string|null)=>void)
    {
        db.query("insert into materiaprima SET ?", materia,(err,res)=>
        {
            if(err)
            {
                callback(err,null);
            }else
            {
                callback(null, "se agrego un nuevo materia prima")
            }
        })
    }

}


export default new ServicioProvedores();