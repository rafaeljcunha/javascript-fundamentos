// Criando uma função que mostre se o valor digitado foi enviado ou se é necessário inserir
function clicarNoBotão() {
  const paragrafoAlteravel = document.getElementById("paragrafo-alteravel");
  const input = document.getElementById("input");

  if (!!input.value) {
    paragrafoAlteravel.innerHTML = "Enviado com sucesso!";
  } else {
    paragrafoAlteravel.innerHTML = "Insira um valor no input.";
  }
}

const button = document.getElementById("botao");
button.onclick = clicarNoBotão; // Atribuindo a função ao evento de click

// Criando função que exiba cada valor digitado no input, em um paragrafo
function exibirValorDigitados(e) {
  const paragrafoAlteravel = document.getElementById("paragrafo-alteravel");
  paragrafoAlteravel.innerText = `O valor que esta sendo digitado é: ${e.target.value}`;
}

const input = document.getElementById("input");
input.addEventListener("keyup", exibirValorDigitados); // Adicionado um método que ficará ouvindo cada evento keyup do elemento
