import { Router } from "express";


const router = Router();

router.post("/",()=>{}) //agregar producto

router.put("/:id",()=>{}) // modificar producto

router.get("/:id",()=>{}) // ver información del producto
router.get("/",()=>{})
export {router}