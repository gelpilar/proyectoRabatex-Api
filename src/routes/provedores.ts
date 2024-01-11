import { Router } from "express";
import { getProvedor, getProvedores, getcompras, getcuentas, postCompra, postMateriaPrima, postProvedor, postagregarCuentaAProvedor, putcerrarCuentaProve } from "../controllers/provedores";

const router= Router();

router.post("/",postProvedor);
router.get("/",getProvedores);
router.get("/:id",getProvedor);
router.get("/cuentas/:id",getcuentas);
router.get("/compras/:id",getcompras);
router.post("/compras/:id",postCompra);
router.post("/cuentas/:id",postagregarCuentaAProvedor)
router.put("/cuentas/:id",putcerrarCuentaProve)
router.post("/materia/",postMateriaPrima)
export {router}