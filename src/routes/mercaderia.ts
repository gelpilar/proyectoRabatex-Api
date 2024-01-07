import { Router } from "express";


const router = Router();

router.post("/",()=>{}) //agregar mercaderia

router.put("/:id",()=>{}) // modificar mercaderia

router.get("/:id",()=>{}) // ver información del mercaderia
router.get("/",()=>{}) 
export {router}