function validarUsuario(nomeUsuario, senhaUsuario) {
  // Função com a palavra reservada `function`
  if (nomeUsuario && senhaUsuario) {
    console.log(`Seja bem vindo, ${nomeUsuario}`);
  } else {
    console.log("Por favor, verique os campos e tente novamente.");
  }
}

validarUsuario("Rafael Cunha", "123123");

const esqueceuSenha = (email) => {
  // Função criada com arrow function
  if (email) {
    console.log(`Um email foi enviado para ${email}`);
  } else {
    console.log("Por favor, informe um email.");
  }
};

esqueceuSenha("email@gmail.com");

function parametrosDeFuncao(
  valor1, // Este é um parametro de função de forma comum.
  valor2
) {
  return valor1 + valor2; // Aqui calculará a soma dos valores
}

// function parametrosDeFuncao(2, 5) retornará 7

function parametroComChave({
  valor1, // Este é um tipo de parametro com chaves
  valor2,
}) {
  return valor1 + valor2; // Aqui calculará a soma dos valores
}
