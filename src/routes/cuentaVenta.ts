import { Router } from "express";


const router = Router();

router.post("/agregarVenta/:id",()=>{}) // agregar venta a la cuenta
router.post("/abrir/:id",()=>{})// abrir cuenta para un provedor
router.put("/cerrar/:id",()=>{}) // cerrar cuenta
router.put("/cambiarEstado/:id",()=>{}) // cambiar estado a cuenta
router.get("/:id",()=>{}) // ver cuenta especifica
router.get("/",()=>{}) // ver todas las cuentas de un cliente






export {router}