import { jogadores } from "../data/jogadores.js";

export const removerJogador = (req, res) => {
    const { indice } = req.query;
    const i = Number(indice);

    if (i >= jogadores.length || jogadores === []) {
        return res.send(`Não existe jogador no índice informado (${i}) para ser removido.`);
    } else {
        jogadores.splice(i, 1);
    }
    
    return res.send(jogadores);
};

