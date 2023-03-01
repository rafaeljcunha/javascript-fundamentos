var notaAluno1 = 7;
var notaAluno2 = 5;

// Operador > Maior que
if (notaAluno1 > notaAluno2) {
  return "Nota do aluno 1 é maior do que a nota do aluno 2";
}

// Operador < Menor que
if (notaAluno1 < notaAluno2) {
  return "Nota do aluno 1 é menor do que a nota do aluno 2";
}

// Operador >= Maior ou igual a
if (notaAluno1 >= notaAluno2) {
  return "Nota do aluno 1 é maior ou igual a nota do aluno 2";
}

// Operador >= Menor ou igual a
if (notaAluno1 <= notaAluno2) {
  return "Nota do aluno 1 é menor ou igual a nota do aluno 2";
}

// Operador == Igual a
if (notaAluno1 == notaAluno2) {
  return "Nota do aluno 1 é igual a nota do aluno 2";
}

// Operador != Diferente de
if (notaAluno1 != notaAluno2) {
  return "Nota do aluno 1 é diferente a nota do aluno 2";
}

// Operador === Idêntico a
if (notaAluno1 === notaAluno2) {
  return "Nota do aluno 1 é idêntica a nota do aluno 2";
}

// Operador !== Idêntico a
if (notaAluno1 !== notaAluno2) {
  return "Nota do aluno 1 e do nota do aluno 2 não são idênticas";
}

// Operador && E/or
if (notaAluno1 === 5 && notaAluno2 === 5) {
  return "Ambos os alunos possuem notas idênticas a 5";
}

// Operador || Ou/or
if (notaAluno1 === 5 || notaAluno2 === 5) {
  return "Pelo menos um dos alunos possuí nota idêntica a 5";
}

// Difereça entre ==, !=, === e !== no Javascript

if (10 == "10") {
  //retorna true
}

if (10 === "10") {
  //retorna false
}

if (10 != "10") {
  //retorna false
}

if (10 !== "10") {
  //retorna true
}
