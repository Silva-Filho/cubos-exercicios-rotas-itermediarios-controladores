export const somar = (req, res) => {
    const { num1, num2 } = req.query;

    const soma = Number(num1) + Number(num2);

    res.send(`resposta: ${soma}`);
};

export const subtrair = (req, res) => {
    const { num1, num2 } = req.query;

    const subtracao = Number(num1) - Number(num2);

    res.send(`resposta: ${subtracao}`);
};

export const multiplicar = (req, res) => {
    const { num1, num2 } = req.query;

    const multiplicacao = Number(num1) * Number(num2);

    res.send(`resposta: ${multiplicacao}`);
};

export const dividir = (req, res) => {
    const { num1, num2 } = req.query;

    const divisao = Number(num1) / Number(num2);

    res.send(`resposta: ${divisao}`);
};

/* module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}; */
