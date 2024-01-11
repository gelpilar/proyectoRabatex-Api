import db from "../config/mysql";


class Registro
{
    getRegistros(callback:(err:Error|null, res:any[]|null)=>void)
    {
        let query = "SELECT fecha, tipo, detalle, Estado, monto FROM ((SELECT v.fecha AS fecha, 'ventas' AS tipo, v.detalle, c.Estado AS Estado, p.monto FROM ventas AS v JOIN cuentaventa AS c ON v.id_cuenta = c.Id JOIN precios AS p ON v.Id_Precio = p.Id) UNION ALL (SELECT p.fecha AS fecha, 'gastos' AS tipo, g.detalle, 'nulo' AS Estado, p.monto FROM gastosespecificos AS g JOIN precios AS p ON p.Id = g.Id_Precio) UNION ALL (SELECT c.fecha_inicio AS fecha, 'proovedores' AS tipo, 'compra realizada a proovedor' AS detalle, c.Estado, c.monto FROM cuentaprovedor AS c)) AS combined_result ORDER BY fecha ASC;";

        db.query(query,(err,res)=>
        {
            if(err)
            {
                callback(err,null)
            }else
            {
                callback(null,res)
            }
        })

    }
}

export default new Registro();