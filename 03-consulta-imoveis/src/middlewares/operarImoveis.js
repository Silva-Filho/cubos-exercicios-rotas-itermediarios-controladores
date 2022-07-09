import { imoveis } from "../data/imoveis.js";

export const validarIndice = (req, res, next) => {
    const { id } = req.params;
    const i = Number(id);

    if (i > imoveis.length || i < 0) {
        return res.send(`O índice informado (${i}) não existe no array de imóveis.`);
    }

    next();
};
