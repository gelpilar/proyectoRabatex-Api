import cors from "cors";
import express from "express";
import {router} from "./routes";

const PORT = 3000;
const app = express();

app.use(cors());
app.use(router)
app.listen (PORT, ()=>
{
        console.log("se escucha")
});
