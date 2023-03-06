const nomeUsuario = "João de Jesus";
const senhaUsuario = "f1f2f3";

!!nomeUsuario && !!senhaUsuario
  ? `Seja bem vindo, ${nomeUsuario}.`
  : "Por favor, verifique os campos."; // Verifica se tem usuário e senha, caso tenha, retorna a mensagem de bem vindo, caso não tenha, solicitar a verificação do usuário para os campos informados.

// Não é recomendado o tipo de verificação abaixo
!!nomeUsuario && !!senhaUsuario
  ? `Seja bem vindo, ${nomeUsuario}.`
  : !!nomeUsuario && !senhaUsuario
  ? "Por favor, informe a senha."
  : !nomeUsuario && !senhaUsuario
  ? "Por favor, informe ambos os campos."
  : "Por favor, informe o nome."; // Este tipo de verificação ternária não recomendada pois dificulta a compreensão do código e da regra do negócio, podemos tornar uma futura manutenção dificultosa por conta da complexidade.
