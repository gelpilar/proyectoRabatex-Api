import db from "../config/mysql";

class gastos
{
    postGastos(nombre:string, detalle:string,monto:number,fecha:Date,callback:(err:Error | null, result:string| null)=>void)
    {
        db.query("Call agregarGastos(?,?,?,?)",[nombre,detalle,monto,fecha],(err,res)=>
        {
            if(err)
            {
                callback(err,null);
            }else
            {
                callback(null,"gasto agregado")
            }
        })

    }

    getGastos(callback:(err:Error | null, result:any[]| null)=>void)
    {
        db.query("select p.fecha, g.nombre, g.detalle, p.monto from gastosespecificos as g join precios as p on p.Id= g.Id_Precio Order by p.fecha;",(err,res)=>
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

export default new gastos();