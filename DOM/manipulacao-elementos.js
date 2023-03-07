// Alterando o texto do paragrafo
const elementoComGetElementById = document.getElementById("paragrafo");
elementoComGetElementById.innerHTML = "Texto alterado com sucesso!";

// Alterando as cores dos textos
const elementoComGetElementByClassName = document.querySelectorAll(".texto");
for (
  let elementIndex = 0;
  elementIndex < elementoComGetElementByClassName.length;
  elementIndex++
) {
  elementoComGetElementByClassName[elementIndex].style.color = "darkgreen";
}

// Inserindo um placeholder no input
const inputValor = document.getElementsByName("input-name");
inputValor[0].placeholder = "Insira um valor";
