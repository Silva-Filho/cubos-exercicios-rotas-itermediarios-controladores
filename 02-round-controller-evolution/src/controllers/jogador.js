import { jogadores } from "../data/jogadores.js";

export const adicionarJogador = (req, res) => {
    const { nome, indice } = req.query;
    const i = Number(indice);
    const nomePrimeiraLetraMaiuscula = nome[0].toUpperCase() + nome.slice(1);

    if (!indice) {
        jogadores.push(nomePrimeiraLetraMaiuscula)
        return res.send(jogadores);
    } else {
        jogadores.splice(i, 0, nomePrimeiraLetraMaiuscula)
        return res.send(jogadores);
    }
};

export const removerJogador = (req, res) => {
    const { indice } = req.query;
    const i = Number(indice);

    jogadores.splice(i, 1);

    return res.send(jogadores);
};

let i = 0;

export const mostrarJogador = (req, res) => {
    if (i >= jogadores.length) {
        i = 0;
    }

    const jogadorDaVez = jogadores[i];

    i++;

    return res.send(`É a vez de ${jogadorDaVez} jogar!`);
};
