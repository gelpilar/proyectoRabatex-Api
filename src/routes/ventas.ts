import { Router } from "express";
import { getCliente, postCliente, postCuentaVenta, postProducto, postVenta, putCliente } from "../controllers/ventas";

const router= Router()

router.get("/cliente/",getCliente);
router.post("/cliente",postCliente);
router.post("/cuenta/",postCuentaVenta);
router.post("/producto/",postProducto);
router.post("/venta/:id",postVenta);
router.put("/cliente/:id",putCliente);
// ver si ver ventas(?)
export {router}