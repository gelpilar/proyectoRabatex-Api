import cors from "cors";
import express, { json } from "express";
import {router} from "./routes";

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json()) 
app.use(router)
app.listen (PORT, ()=>
{
        console.log("se escucha")
});
