import { Router } from "express";
import { getCliente, getClientes, postCliente, putCliente } from "../controllers/clientes";


const router = Router();

router.post("/",postCliente) //agregar provedor

router.put("/:id",putCliente) // modificar provedor

router.get("/:id",getCliente) // ver información del provedor

router.get("/",getClientes)// obtiene todos los clientes
export {router}