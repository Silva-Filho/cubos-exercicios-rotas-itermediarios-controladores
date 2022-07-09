import { imoveis } from "../data/imoveis.js";

export const listarImoveis = (req, res) => res.send(imoveis);

export const mostrarImovelEscolhido = (req, res) => {
    const { id } = req.params;

    const imovelEncontrado = imoveis.find( imovel => {
        return imovel.id ===  Number(id);
    } );

    return res.send(imovelEncontrado);
};
