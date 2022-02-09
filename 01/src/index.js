/* const { 
    dividir, 
    multiplicar, 
    somar, 
    subtrair 
} = require("./controllers/operacoes"); */

import express from "express";

import { roteador } from "./router.js";

const servidor = express();

const porta = 3000;

/* servidor.get("/", (req, res) => {
    res.send("Página inicial de teste.");
    console.log(req.params);
    console.log(req.query);
} ); */

/* servidor.get("/somar", somar);

servidor.get("/subtrair", subtrair);

servidor.get("/multiplicar", multiplicar);

servidor.get("/dividir", dividir); */
servidor.use(roteador);

servidor.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});

