# Conceitos e fundamentos - Javascript

- #### O que são Algoritmos?

  - Um algoritmo é uma sequência de instruções ou comandos realizados de maneira sistemática com o objetivo de resolver um problema ou executar uma tarefa.
    <br /><br /> [Imagem exemplo algoritmo](../images/algoritmo-imagem.jpeg)

- #### O que é Lógica de programação?

  - Lógica de programação é a técnica utilizada para desenvolver instruções em uma sequência para atingir determinado objetivo.
    <br /><br />[Exemplo lógica](./logica.js)

- #### Operadores lógicos e matemáticos
  - Operadores são símbolos especiais que envolvem um ou mais operandos com a finalidade de produzir um determinado resultado.
  - Difereça entre == e === no Javascript
  - No Javascript, devemos tomar cuidado ao utilizarmos os operados ==, !=, === e !==, pois o javascript interpreta cada um de forma diferente, apesar de parecer serem a mesma coisa.

| Operador | Operação         | Exemplo |
| -------- | ---------------- | ------- |
| >        | Maior que        | a > b   |
| <        | Menor que        | a < b   |
| >=       | Maior ou igual a | a >= b  |
| <=       | Menor ou igual a | a <= b  |
| ==       | Igual a          | a == b  |
| !=       | Diferente de     | a != b  |
| ===      | Idêntico a       | a === b |
| !==      | Não idêntico a   | a !== b |
| &&       | E/and            | a && b  |
| ll       | Ou/or            | a ll b  |

<br /> [Exemplo operadores](./operadore-matematicos.js)

- #### Console

  - O objeto console, fornece acesso ao console de debug, utilizamos ele principalmente para verificar valores e etc; de forma que possamos visualizar no terminal ou no console da web.
    <br /><br /> [Exemplo console](./console.js)

- #### Variáveis e Escopo de variáveis (var, let e const)

  - `var` - Declara uma variável, opcionalmente, inicializando-a com um valor, este tipo de várivel pode receber um novo valor quando necessário.
  - `let` - Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor, este tipo de várivel pode receber um novo valor quando necessário dentro do seu escopo.
  - `const` - Declara uma constante de escopo de bloco, apenas de leitura, ou seja, não podemos atribuir um novo valor a uma constante.
    <br /><br /> [Exemplo variáveis](./variaveis.js)

- #### Concatenação e template literals

  - Concatenar é o meio que utilizamos para juntar duas ou mais strings ou variáveis e atualmente podemos concatenar utilizando o operador + ou utilizando template literals.
    <br /><br /> [Exemplo concatenação](./concatenacao.js)

- #### Tipos de dados (string, number, null, undefined, object, boolean)

  - `string` - É o tipo de dado que simboliza um texto e uma string deve conter aspas duplas ou simples envolvendo um conteúdo.
  - `number` - É o tipo de dado que representará os valores numéricos.
  - `object` - Um valor `null`, um `array` e um `objeto` em sí, podem assumir o tipo object.
  - `null` - Geralmente é definido por um programador, null quer dizer que algo existe, mas não possui valor algum.
  - `undefined` - Geralmente informa que algo não existe ou que seu valor é indefinido.

  - Podemos verificar o tipo de uma variável utilizando o método `typeof` do javascript

  O `Javascript possui tipagem fraca`, ou seja, ele não infere tipos como no typescript, sendo assim, uma variável pode receber qualquer tipo de dado sem que ocorram erros de tipagem
  <br /><br /> [Exemplo tipos de dados](./tipos-dados.js)

- #### Estrutura de dados (Array)

  - Um Array é definido como um conjunto de dados e que pode conter vários tipos de dados, sendo booleanos, numéricos, strings, objetos e etc.
  - Um array não necessáriamente deve sempre conter dados, pois os dados podem ser adicionados posteriormente no array.
  - Arrays possuem vários métodos para que você possa manipular seu conteúdo, desde remover ou adicionar um item, ordenar os itens conforme um critério, filtrar certos itens e etc.

  Pense em um único livro, um livro é um objeto, agora imagina uma bolsa cheia de livros, isto seria um array, onde a bolsa seria o array e todos os livros seriam os objetos deste array.
  <br /><br /> [Exemplo array](./array.js)

- #### Casting de tipos (toString, parseInt, parseFloat)

  - No Javascript conseguimos converter tipos de dados para outros tipos de dados, como por exemplo, converter um valor númerico para uma string, ou um valor booleano e vice-versa.
  - `toString ou String` - Converte um valor para o tipo string.
  - `Number` - Converte um valor para o tipo númerico.
  - `Boolean` ou `!!` - Converte um valor para o tipo lógico.
    <br /><br /> [Exemplo casting de tipo](./casting-tipos.js)

- #### Condicionais (if/else if/else, switch)

  No Javascript e em outras linguagens, utilizamos as condicionais para aplicarmos determinadas ações baseado em críterios, por exemplo, quando esquecemos nossa senha e clicamos para recuperar, o site provavelmente deve pedir seu email para enviar a redefinição de senha, e você precisará informar o seu email para enviar a solicitação, neste caso, é bem provavel que existe um if/else ali, para que possa verificar se existe um email, caso exista (if), você poderá solicitar uma redefinição, caso não exista (else), uma mensagem de erro pode aparecer, por exemplo: `Informe o seu email para redefinição de senha`.

  - `if/else if/else` - É utilizado para quando precisamos verificar determinadas condições para aplicarmos determinadas ações, também podemos encadear varias verificações.
  - `switch` - É utilizado para a mesma finalidade do if/else, no entanto, é recomendado para quando precisamos aplicar varias ações para um mesmo valor que pode ser diferente em alguns casos.
    <br /><br /> [Exemplo condicionais](./if-else-switch.js)

- #### Operador ternário

  Operadores ternário possuem a mesma finalidade do if/else if/else, porém de uma forma mais resumida.

  - Não é recomendado utilizar ternário quando precisamos verificar muitas condições, para isso, devemos utilizar if/else ou switch se possível.
    <br /><br /> [Exemplo condicionais](./ternario.js)

- #### Laços de repetições (for, for in, for of, while)

  Laços de repetições são indicados para quando precisamos fazer um loop em arrays, também podemos determinar condições para realizarmos determinadas ações.

  - Com a chegada da versão do javascript, ECMAScript 6 (ES6) em 2015, os métodos map, forEach, filter e etc; tem sido cada vez mais usados no lugar destas estruturas de repetição.
    <br /><br /> [Exemplo laço de repetição](./laco-repeticao.js)

- #### Funções

  Funções são blocos onde podemos escrever código para que sejam executados apenas quando a função for chamada, assim podemos criar instruções de código, calculos e lógicas que apenas serão executadas em um determinado momento.

  - Uma função geralmente é criada com o uso da palavra reservada `function`.
  - Após o ES6, também podemos utilizar funções com `arrow function`.
  - Funções podem receber parametros para gerenciar dentro do seu bloco.
  - Os parametros da função podem assumir qualquer tipo de dado.
  - Parametros que são recebidos da forma mais comum, sem chaves, devem seguir a mesma ordem que é recebida pela função na hora de informar os valores para a função(este tipo de parametro é quando temos certeza que não precisaremos mais do que dois valores para a função).
  - Parametros com chaves é a forma mais segura de trabalhar, pois não precisamos nos preocupar com a ordem como os valores são informados(este tipo de parametro é recomendado para qualquer tipo de função, pois ele torna a identificação dos parametros mais fácil).
