## Exercícios

***1. Calculadora Online***

Neste exercício devemos criar um servidor com 4 rotas GET para executar as 4 operações matemáticas básicas (somar, subtrair, multiplicar, dividir)
Você deverá criar um servidor como mostrado na aula contendo as seguintes rotas GET

Soma: /somar
Subtração: /subtrair
Multiplição: /multiplicar
Divizão: /dividir
Todas as rotas devem esperar dois parâmetros query **num1** e **num2** e retornar a resposta da operação.

#### Exemplos de requisições e respostas:

requisição: /somar?num1=10&num2=5 resposta: 15

requisição: /subtrair?num1=10&num2=5 resposta: 5

requisição: /multiplicar?num1=10&num2=5 resposta: 50

requisição: /dividir?num1=10&num2=5 resposta: 2

---

***2. RoundControllerEvolution.com***

Para este exercício deverá ser criado um servidor com nodejs para controlar rodadas de um jogo. Dado um array de nomes de jogadores que estará no script do servidor, deveremos a cada requisição ao servidor, responder com uma mensagem dizendo de quem é a vez de jogar.

O servidor deverá utilizar a porta 8000 e ser acessado através de http://localhost:8000 onde ficará o recurso principal da letra a) abaixo.

Para todas as letras a seguir do exercício, utilizaremos o array **jogadores** abaixo:

```javascript=
const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
```

Todos os passos (letras) do exercício deverão ser implementadas no mesmo script do servidor.

Vamos aos recursos do servidor:

**a)** Crie um recurso na home (http://localhost:8000) do servidor para que seja retornada uma mensagem informando de quem é a vez de jogar.
A mensagem retornada ao navegador deverá seguir o seguinte formato:

```
É a vez de {nomeDoJogador} jogar!
```

Portanto, considerando o array de exemplo acima, na primeira requisição deverá ser retornado:

```
É a vez de José jogar!
```

Na segunda requisição:

```
É a vez de Maria jogar!
```

E assim por diante.

Após apresentar o nome do último jogador, a rodada finaliza e portanto, o próximo nome a ser retornado na próxima requisição deverá ser o do primeiro jogador, iniciando uma nova rodada.

**b)** Agora criaremos um novo recurso no servidor para remover jogadores do array. Este recurso deverá ser acessado através do endereço http://localhost:8000/remover e deverá receber um parâmetro da query chamado **indice** onde deverá ser informado o índice no array do jogador a ser removido.

Portanto, considerando o array de exemplo do início do exercício, ao fazer a seguinte requisição:

http://localhost:8000/remover?indice=2

O servidor deverá remover o jogador da posição 2 do array e retornar ao navegador o array após a remoção. Lembrando que os índices do array é base 0, portanto o primeiro jogador estará na posição 0 e o último jogador do array de exemplo estará na posição 4.

Desta forma, após a remoção do jogador no índice 2, deverá ser retornado ao navegador o array assim:

```javascript=
["José","Maria","Marcos","Fernanda"]
```

Caso não exista jogador na posição (índice) informado pela requisição, nenhum jogador deverá ser removido do array e deverá ser retornada a resposta com a seguinte mensagem:

```
Não existe jogador no índice informado (2) para ser removido.
```

**Importante:** Após a remoção de um jogador, o recurso principal da home que mostra o próximo jogador deverá continuar funcionando normal e corretamente.

**c)** Para finalizar, criaremos o recurso de adicionar jogadores. Este recurso deverá ser acessado através do endereço http://localhost:8000/adicionar e receber um parâmetro query obrigatório **nome** onde deverá ser informado o nome do jogador a ser adicionado, e outro parâmetro query opcional **indice** que poderá ser utilizado para especificar a posição (índice) do array onde se deseja adicionar o jogador. Portanto, se o parâmetro **indice** **NÃO** for informado, o jogador deverá ser adicionado ao final do array. Se o parâmetro **indice** for informado, o jogador deverá ser incluído no índice informado, movendo para uma posição posterior cada um dos jogadores que já existiam a partir daquele índice informado de forma que a ordem seja mantida.

Os nomes dos jogadores deverão ser sempre adcionados ao array com a primeira letra maiúscula e as demais letras minúsculas.

Se o valor do indice informado no parâmetro for uma posição que não existe no array, o novo jogador não deve ser adicionado e deverá ser retornada a mensagem:

```
O índice informado ({indice}) não existe no array. Novo jogador não adicionado.
```

Após adicionar o novo jogador, deverá ser retornado ao navegador o array de jogadores alterado.

**Exemplos:**

Se for requisitado ao servidor este recurso com os seguintes parâmetros:

http://localhost:8000/adicionar?nome=luiza

Considerando o estado inicial do array, após a adição da nova jogadora, deverá ser retornado ao navegador o seguinte array:

```
["José","Maria","João","Marcos","Fernanda","Luiza"]
```

Se for adicionado o parametro **indice** na requisição anterior ficando assim:

http://localhost:8000/adicionar?nome=luiza&indice=2

Considerando o estado inicial do array, após a adição da nova jogadora, deverá ser retornado ao navegador o seguinte array:

```
["José","Maria","Luiza","João","Marcos","Fernanda"]
```

Se for adicionado o parametro **indice** na requisição do primeiro exemplo com um valor de índice não existente no array, ficando assim:

http://localhost:8000/adicionar?nome=luiza&indice=80

Considerando o estado inicial do array, deverá ser retornada a seguinte mensagem:

```
O índice informado (80) não existe no array. Novo jogador não adicionado.
```

**Importante:** Após a adição de um novo jogador, o recurso principal da home que mostra o próximo jogador deverá continuar funcionando normal e corretamente.

---

***3. Consulta de imóveis***

Neste exercício deverá ser criado um servidor para consulta de imóveis pré cadastrados. Este servidor deverá ser feito em nodejs e deverá ser acessado através do endereço http://localhost:8000. A lista pré cadastrada de imóveis no servidor deverá ser um array de objetos onde cada objeto representará um imóvel e possuirá propriedades que definem o imóvel conforme exemplo abaixo:

```javascript
const imoveis = [
    {
        id: 1,
        logradouro: "Av. Getúlio Vargas",
        numero: 1458,
        complemento: "Térreo",
        bairro: "Funcionários",
        cidade: "Belo Horizonte",
        cep: "30112-021",
    },
    {
        id: 2,
        logradouro: "Av. Paulista",
        numero: 1009,
        complemento: "16º andar",
        bairro: "Cerqueira César",
        cidade: "São Paulo",
        cep: "01310-100",
    },
]
```

Este servidor deverá possuir apenas um recurso **imoveis** e apenas dois métodos (rotas) que utilizam o verbo **HTTP GET**. Um desses métodos (rotas) não deverá receber qualquer parâmetro e deverá retornar a lista completa de imóveis. O outro método (rota) deverá receber um parâmetro no path da URL que é o **ID** do imóvel a ser consultado e deverá retornar apenas 1 objeto que corresponde àquele imóvel daquele **ID**.

Além dos requisitos acima, o servidor deverá ser separado em camadas, de forma que cada um dos componentes (inicialização dos servidor, rotas, controladores e dados) fiquem em arquivos e pastas diferentes. Para contemplar essa divisão, evouluiremos o servidor em etapas que serão descritas abaixo.

**Obs.:** Ao final de cada etapa, o servidor sempre deverá estar funcionando da mesma maneira para o cliente, portanto devemos testar as requisições e retornos ao final de cada etapa.

**a) API em único arquivo**

Para começar, criaremos o servidor em um único arquivo **index.js**. Para isso precisaremos inicializar uma aplicação (pacote) nodejs e instalar os pacotes necessários para criar um servidor. Além disso, precisaremos ter o arquivo **index.js** onde toda a execução dos servidor acontecerá (importação dos pacotes necessários, construção da aplicação, definição do array de imoveis e definição dos métodos que atenderão as rotas mencionadas antes).

Ao final desta etapa, deverá ser possível receber como retorno a lista completa (array completo) de imóveis ao realizar a requisição http://localhost:8000/imoveis e também deverá ser possível receber como retorno um único objeto representando o imóvel que corresponda ao ID que será enviado ao servidor ao realizarmos a requisição http://localhost:8000/imoveis/2.

Exemplos de requisições e respectivas respostas:

Para a requisição HTTP GET http://localhost:8000/imoveis, deverá ser retornado:

```json
[
    {
        "id": 1,
        "logradouro": "Av. Getúlio Vargas",
        "numero": 1458,
        "complemento": "Térreo",
        "bairro": "Funcionários",
        "cidade": "Belo Horizonte",
        "cep": "30112-021"
    },
    {
        "id": 2,
        "logradouro": "Av. Paulista",
        "numero": 1009,
        "complemento": "16º andar",
        "bairro": "Cerqueira César",
        "cidade": "São Paulo",
        "cep": "01310-100"
    }
]
```

Para a requisição HTTP GET http://localhost:8000/imoveis/2, deverá ser retornado:

```json
{
    "id": 2,
    "logradouro": "Av. Paulista",
    "numero": 1009,
    "complemento": "16º andar",
    "bairro": "Cerqueira César",
    "cidade": "São Paulo",
    "cep": "01310-100"
}
```

**b) Camada de dados**

Após o servidor estar funcionando em único arquivo, realizaremos a separação da camada de dados. Para isso deveremos criar um diretório chamado **dados** no mesmo nível do arquivo **index.js** e dentro do novo diretório criar um arquivo chamado **imoveis.js** onde deverá estar a definição de uma constante **imoveis** que possuirá como valor o array de imóveis que antes existia no arquivo principal do servidor. Ao final deste arquivo **imoveis.js** a constante **imoveis** deverá ser exportada.

Já no arquivo principal **index.js** deverá ser removida a definição do array **imoveis** que antes ali existia, ao invés disso, deveremos importar o arquivo **imoveis.js** que acabamos de criar no diretório **dados** para dentro de uma constante chamada **imoveis**.

Feito isso teremos separado a camada de dados e a API deverá se manter funcionando normalmente como estava antes.

**c) Controladores**

Chegou o momento de separar a camada de controladores. Para isso criaremos um diretório chamado **controladores** no mesmo nível do arquivo principal **index.js** e dentro deste novo diretório deveremos criar um arquivo **imoveis.js**.

Neste novo arquivo **imoveis.js** importaremos o array do arquivo **imoveis.js** do diretório de dados para dentro de uma constante **imoveis**.

Após a importação dos dados, criaremos dois métodos **get** e **getPorId** (ambos recebendo dois parâmetros **req** e **res**), que possuirão as lógicas que antes estavam no arquivo principal **index.js** para, responder a lista completa (array inteiro) de imóveis e para responder um único objeto de imóvel correspondente ao ID recebido na requisição, respectivamente.

Ao final do arquivo de controladores, exportaremos os dois métodos dentro de um objeto.

Para utilizar os novos controladores, deveremos importar o arquivo **imoveis.js** do diretório de controladores no arquivo principal **index.js** do servidor (neste ponto podemos utilizar a desestruturação para definir duas variáveis diferentes para cada um dos métodos de controladores que serão importados). Após importar os métodos em variáveis, deveremos passar essas variáveis que guardam as funções como parâmetros para os métodos que configuram as duas rotas **GET**, substituindo as arrow functions que ali estavam implementando as lógicas para cada uma das rotas.

**Após importar os controladores e passar os métodos para as configurações de rotas, o servidor deverá estar funcionando perfeitamente como no início.**

**Obs.:** Note que a importação do arquivo de dados não será mais necessária no arquivo principal **index.js**, e portanto, poderá ser removida.

**d) Roteadores**

Para finalizar nosso servidor dividido em camadas, deveremos separar a configuração das rotas. Para isso, deveremos criar um arquivo **roteador.js** no mesmo nível do arquivo principal **index.js**.

Neste novo arquivo, precisaremos realizar as importações necessárias e em seguida colocar os comandos que configuram as duas rotas que nosso servidor possui.

Ao final do arquivo, deveremos exportar nosso roteador.

Já no arquivo principal **index.js**, para que nosso roteador possa ser utilizado, deveremos importá-lo e em seguida usá-lo.

**Com o roteador pronto, sendo importado e usado no arquivo principal, nosso servidor deverá estar funcionando normalmente como no início.**

**Obs.:** Note que no arquivo principal, após criar, importar e utilizar o roteador, não precisaremos mais ter a importação dos controladores, que poderá ser apagada.

--

Para finalizar o exercício, após fazer todas as divisões de camadas solicitadas acima, teste seus métodos verificando se eles estão nas rotas corretas, recebendo os parâmetros corretos (quando for o caso) e respondendo o que deveria ser respondido.

---

###### tags: `módulo 2` `exercícios` `lógica` `nodeJS`
