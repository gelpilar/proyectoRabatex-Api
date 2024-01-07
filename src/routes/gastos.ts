import { Router } from "express";


const router = Router();

router.post("/",()=>{}) //agregar gasto

router.put("/:id",()=>{}) // modificar gasto

router.get("/:id",()=>{}) // ver información del gasto
router.get("/",()=>{}) // ver información de gastos


export {router}