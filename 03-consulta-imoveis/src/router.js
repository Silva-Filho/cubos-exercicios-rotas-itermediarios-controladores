import express from "express";

import { 
    listarImoveis, 
    mostrarImovelEscolhido 
} from "./controllers/operarImoveis.js";
import { validarIndice } from "./middlewares/operarImoveis.js";

export const roteador = express();

roteador.get("/imoveis", listarImoveis);

roteador.get("/imoveis/:id", validarIndice, mostrarImovelEscolhido);
