import { Router } from "express";
import { getGastos, postGastos } from "../controllers/gastos";


const router= Router();

router.get("/",getGastos);
router.post("/",postGastos);
export {router};