import { Router } from "express";
import { getProvedor } from "../controllers/provedores_controladores";

const router = Router();

router.get("/",getProvedor);
router.post("/")

export {router}
