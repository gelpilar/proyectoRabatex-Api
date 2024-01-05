import { Router } from "express";
import {readdirSync} from "fs";

const PATH_ROUTER= `${__dirname}`;
/**
 * El dirname cos da la ruta del directorio actual
 */

const cleanFileName= (fileName:string)=>
{
    const file= fileName.split(".").shift();
    return file
}
const router = Router();

readdirSync(PATH_ROUTER).filter((fileName)=>//lee cuantos archivos y cuales hay en x directorio, en este caso le vamos a poner PATH_ROUTER-> nos devuelve un array 
{
    const cleanName = cleanFileName(fileName);
    
    if(cleanName !="index")
    {
		// aca hacemos la importación dinamica
        import(`./${cleanName}`).then((moduleRouter)=>{
            console.log("se esta cargando");
            router.use(`/${cleanName}`,moduleRouter.router);
            
        })

    }
})

export {router}