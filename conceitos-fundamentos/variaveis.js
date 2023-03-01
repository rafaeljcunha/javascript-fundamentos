var variavelGlobal = 10;

if (variavelGlobal === 10) {
  var variavelEscopo = 5;
}

console.log(variavelEscopo);

if (variavelGlobal === 10) {
  let variavelBloco = 8;
  variavelBloco = 5; // -> Resulta em 5, pois variáveis do tipo var e let podem ser alteradas
}

// console.log(variavelBloco) -> Resulta em erro, por que este tipo de variável só existe dentro do bloco do if

if (variavelGlobal === 10) {
  const variavelConstante = 10;

  // variavelConstante = 5 -> Resulta em erro, por que esta variável não pode ser alterada, ela é apenas de leitura
}
