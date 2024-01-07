import { Router } from "express";
import { getCuenta, getCuentas, postCompra, postCuenta, putCuenta } from "../controllers/cuentaprovedores";

const router = Router();

router.post("/agregarCompra",postCompra) // agregar compra a la cuenta
router.post("/abrir/",postCuenta)// abrir cuenta para un provedor
router.put("/cerrar/:id",putCuenta) // cerrar cuenta
router.get("/:id",getCuenta) // ver cuenta especifica
router.get("/cuentas/:id",getCuentas) // ver todas las cuentas de un cliente


export {router}