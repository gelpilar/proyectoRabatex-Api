import { Router } from "express";


const router = Router();

router.post("/",()=>{}) //agregar provedor

router.put("/:id",()=>{}) // modificar provedor

router.get("/:id",()=>{}) // ver información del provedor
router.get("/",()=>{}) 
export {router}
