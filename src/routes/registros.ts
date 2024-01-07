import { Router } from "express";


const router = Router();

router.get("/",()=>{}) //obtener todos los registros en forma ascendente por fecha

router.get("/:id",()=>{}) // traer informacion del registro seleccionado

export {router}