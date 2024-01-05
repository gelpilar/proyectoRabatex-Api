import db from "../config/mysql";
import Proveedor from "../interfaces/IProvedores";

class ServiciosDeProvedores{

    getAllProvedores(callback:(err:Error | null, results: any[]|null)=>void)
    {
        db.query('SELECT * FROM provedores',(err,results)=>
        {
            if (err) {
                callback(err, null);
              } else {
                callback(null, results);
              }
        })
    }

}


export default new ServiciosDeProvedores();