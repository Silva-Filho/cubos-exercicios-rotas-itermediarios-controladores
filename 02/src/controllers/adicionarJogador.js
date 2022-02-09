import { jogadores } from "../data/jogadores.js";

export const adicionarJogador =  (req, res) => {
    const { nome, indice } = req.query;
    const i = Number(indice);
    const nomePrimeiraLetraMaiuscula = nome[0].toUpperCase() + nome.slice(1);

    if (i > jogadores.length || i < 0) {
        return res.send(`O índice informado (${i}) não existe no array. Novo jogador não adicionado.`);
    } else if (!indice) {
        jogadores.push(nomePrimeiraLetraMaiuscula)
        return res.send(jogadores);
    } else {
        jogadores.splice(i, 0, nomePrimeiraLetraMaiuscula)
        return res.send(jogadores);
    }
};

