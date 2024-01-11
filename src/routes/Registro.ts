import { Router } from "express";
import { getRegistros } from "../controllers/registros";

const router= Router()

router.get("/",getRegistros)



export {router}