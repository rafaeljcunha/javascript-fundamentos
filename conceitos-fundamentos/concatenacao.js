// Concatenação com o operador +

const nome = "Rafael";
const sobrenome = "Juliani da Cunha";
const idade = "29 anos";
const profissao = "Engenheiro de software";

const nomeESobrenomeConcatencaoNormal =
  nome + " " + sobrenome + ", " + idade + ", " + profissao + ".";

const nomeESobrenomeTemplateLiterals = `${nome} ${sobrenome}, ${idade}, ${profissao}.`;

console.log({
  "concatenando com operador": nomeESobrenomeConcatencaoNormal,
  "concatenando com template literals": nomeESobrenomeTemplateLiterals,
});
