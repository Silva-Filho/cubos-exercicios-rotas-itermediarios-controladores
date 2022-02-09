import { 
    listarImoveis, 
    mostrarImovelEscolhido 
} from "./controllers/operarImoveis.js";

import express from "express";

export const roteador = express();

roteador.get("/imoveis", listarImoveis);

roteador.get("/imoveis/:id", mostrarImovelEscolhido);

