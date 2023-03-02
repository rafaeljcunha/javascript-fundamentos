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

  - var - Declara uma variável, opcionalmente, inicializando-a com um valor, este tipo de várivel pode receber um novo valor quando necessário.
  - let - Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor, este tipo de várivel pode receber um novo valor quando necessário dentro do seu escopo.
  - const - Declara uma constante de escopo de bloco, apenas de leitura, ou seja, não podemos atribuir um novo valor a uma constante.
    <br /><br /> [Exemplo variáveis](./variaveis.js)

- #### Concatenação e template literals

  - Concatenar é o meio que utilizamos para juntar duas ou mais strings ou variáveis e atualmente podemos concatenar utilizando o operador + ou utilizando template literals.
    <br /><br /> [Exemplo concatenação](./concatenacao.js)

- #### Tipos de dados (string, number, null, undefined, object, boolean)

  - string - É o tipo de dado que simboliza um texto e uma string deve conter aspas duplas ou simples envolvendo um conteúdo.
  - number - É o tipo de dado que representará os valores numéricos.
  - object - Um valor null, um array e um objeto em sí, podem assumir o tipo object.
  - null - É um tipo de dado onde geralmente é definido por um programador, null quer dizer que algo existe, mas não possui valor algum.
  - undefined - É um tipo de dado onde geralmente informa que algo não existe ou que seu valor é indefinido.

  - Podemos verificar o tipo de uma variável utilizando o método typeof do javascript

  O Javascript possui tipagem fraca, ou seja, ele não infere tipos como no typescript, sendo assim, uma variável pode receber qualquer tipo de dado sem que ocorram erros de tipagem
  <br /><br /> [Exemplo tipos de dados](./tipos-dados.js)

- #### Estrutura de dados (Array)

  - Um Array é definido como um conjunto de dados e que pode conter vários tipos de dados, sendo booleanos, numéricos, strings, objetos e etc.
  - Um array não necessáriamente deve sempre conter dados, pois os dados podem ser adicionados posteriormente no array.
  - Arrays possuem vários métodos para que você possa manipular seu conteúdo, desde remover ou adicionar um item, ordenar os itens conforme um critério, filtrar certos itens e etc.

  Pense em um único livro, um livro é um objeto, agora imagina uma bolsa cheia de livros, isto seria um array, onde a bolsa seria o array e todos os livros seriam os objetos deste array.
  <br /><br /> [Exemplo array](./array.js)

- #### Casting de tipos (toString, parseInt, parseFloat)

  - No Javascript conseguimos converter tipos de dados para outros tipos de dados, como por exemplo, converter um valor númerico para uma string, ou um valor booleano e vice-versa.
  - toString ou String - Converte um valor para o tipo string.
  - Number - Converte um valor para o tipo númerico.
  - Boolean ou !! - Converte um valor para o tipo lógico.
    <br /><br /> [Exemplo casting de tipo](./casting-tipos.js)

- #### Condicionais (if else, switch)

- #### Operador ternário

- #### Laços de repetições (for, for in, for of, while)

- #### Funções
