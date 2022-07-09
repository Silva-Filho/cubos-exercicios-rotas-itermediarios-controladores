import express from "express";

import { adicionarJogador, mostrarJogador, removerJogador } from "./controllers/jogador.js";
import { validarAdicao, validarRemocao } from "./middlewares/jogador.js";

export const roteador = express();

roteador.get("/", mostrarJogador);
roteador.get("/remover", validarRemocao, removerJogador);
roteador.get("/adicionar", validarAdicao, adicionarJogador);
