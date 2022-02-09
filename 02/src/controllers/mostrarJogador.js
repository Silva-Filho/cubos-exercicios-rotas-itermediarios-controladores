import { jogadores } from "../data/jogadores.js";

let i = 0;

export const mostrarJogador = (req, res) => {
    if (i >= jogadores.length) {
        i = 0;
    }

    const jogadorDaVez = jogadores[i];

    i++;

    return res.send(`É a vez de ${jogadorDaVez} jogar!`);
};

