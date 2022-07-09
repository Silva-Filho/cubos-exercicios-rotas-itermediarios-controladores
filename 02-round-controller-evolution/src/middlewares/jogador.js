import { jogadores } from "../data/jogadores.js";

export const validarAdicao = (req, res, next) => {
    const { indice } = req.query;
    const i = Number(indice);

    if (i > jogadores.length || i < 0) {
        return res.send(`O índice informado (${i}) não existe no array. Novo jogador não adicionado.`);
    }

    next();
}

export const validarRemocao = (req, res, next) => {
    const { indice } = req.query;
    const i = Number(indice);

    if (i >= jogadores.length || jogadores === []) {
        return res.send(`Não existe jogador no índice informado (${i}) para ser removido.`);
    }

    next();
}