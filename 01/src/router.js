import express from "express";

import { 
    dividir, 
    multiplicar, 
    somar, 
    subtrair 
} from "./controllers/operacoes.js";

export const roteador = express();

/* roteador.get("/", (req, res) => {
    res.send("Página inicial de teste.");
    console.log(req.params);
    console.log(req.query);
} ); */

roteador.get("/somar", somar);
roteador.get("/subtrair", subtrair);
roteador.get("/multiplicar", multiplicar);
roteador.get("/dividir", dividir);

