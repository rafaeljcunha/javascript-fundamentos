const nomeUsuario = "João de Jesus";
const senhaUsuario = "f1f2f3";

let mensagemUsuario = null;
let validadorCampo = null;

if (!!nomeUsuario && !!senhaUsuario) {
  // Se tiver nome do usuário e senha
  validadorCampo = "sucesso";
} else if (!!nomeUsuario && !senhaUsuario) {
  // Senão se tiver nome do usuário e não tiver senha
  validadorCampo = "informar senha";
} else if (!nomeUsuario && !senhaUsuario) {
  // Senão se não tiver nome do usuário e não tiver senha
  validadorCampo = "informar todos campos";
} else {
  // Se não tiver nome do usuário
  validadorCampo = "informar nome";
}
console.log(validadorCampo);

switch (
  validadorCampo // Verifica qual o valor do campo, se atingir um dos cases, ele atribui um valor para mensagem de usuário, se não, ele retorna uma mensagem por padrão(default)
) {
  case "sucesso":
    mensagemUsuario = `Seja bem vindo, ${nomeUsuario}.`;
    break;
  case "informar senha":
    mensagemUsuario = "Por favor, informe a senha.";
    break;
  case "informar todos campos":
    mensagemUsuario = "Por favor, informe ambos os campos.";
    break;
  default:
    mensagemUsuario = "Por favor, informe o nome.";
    break;
}
console.log(mensagemUsuario);
