

import express from "express";

import { adicionarJogador } from "./controllers/adicionarJogador.js";
import { mostrarJogador } from "./controllers/mostrarJogador.js";
import { removerJogador } from "./controllers/removerJogador.js";

export const roteador = express();

roteador.get("/", mostrarJogador);
roteador.get("/remover", removerJogador);

roteador.get("/adicionar", adicionarJogador);

