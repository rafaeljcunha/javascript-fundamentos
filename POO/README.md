# Programação Orientada a Objetos (POO)

#### Paradigmas da Orientação a Objetos

O Javascript é uma linguagem multiparadigmas, onde podemos escrever código seguindo diferentes tipos de paradigmas de programação, sendo paradigma de programação, um conjunto de regras que podemos seguir para resolver um problema.

- Atualmente trabalhamos com dois principais paradigmas, que seriam:

  - `Paradigma Procedural` que é a chamada de procedimentos para a manipulação dos dados, como exemplo, executar funções para obtermos determinados resultados.
  - `Paradigma de Orientação a Objetos` que é quando trabalhamos com uma estrutura onde os dados possuem comportamentos, como classes, por exemplo.

- Pilares da Programação Orientada a Objetos
  - `Abstração` - Este pilar é baseado em quando criamos códigos no qual o usuário não deve se preocupar com a implementação, como um caixa eletrônico, não precisamos saber quais requisições foram feitas, qual canal foi aberto para as solicitações, como ele conta o dinheiro e etc; só precisamos ver saldo, sacar dinheiro e etc; ou seja, só precisamos do necessário para que o usuário possa ter o que ele precisa.
  - `Encapsulamento` - Este pilar é baseado na privatização de atributos e funções que são responsáveis por sí mesmas e seus valores não são alterados por comandos externos.
  - `Herança` - Este pilar é baseado no conceito de compartilhar métodos e propriedades entre classes e objetos, pois quando temos objetos com métodos e atributos distintos, mas que possuem métodos e atributos que representam o mesmo significado, podemos herdar estes para simplificar a implementação. Para este tipo de pilar, também precisamos utilizar um método chamada de `super()`
    - `super()` - É responsável por permitir o acesso ao construtor da classe/objeto herdado, possibilitando a passagem de parametros para o construtor da classe/objeto pai
