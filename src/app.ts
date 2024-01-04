import cors from "cors";
import express from "express";

const PORT = 3000;
const app = express();

app.use(cors());

app.listen (PORT, ()=>
{
        console.log("se escucha")
});
