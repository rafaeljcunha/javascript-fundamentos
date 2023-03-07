const elementoComQuerySelector = document.querySelector("#titulo");
console.log(elementoComQuerySelector);
console.log("-------------------------");

const elementoComQuerySelectorAll = document.querySelectorAll(
  "#titulo, #paragrafo,#input"
);
console.log(elementoComQuerySelectorAll);
console.log("-------------------------");

const elementoComGetElementById = document.getElementById("paragrafo");
console.log(elementoComGetElementById);
console.log("-------------------------");

const elementoComGetElementByClassName =
  document.getElementsByClassName("texto");
console.log(elementoComGetElementByClassName);
console.log("-------------------------");

const elementoComGetElementByName = document.getElementsByName("input-name");
console.log(elementoComGetElementByName);
console.log("-------------------------");

const elementoComGetElementByTag = document.getElementsByTagName("p");
console.log(elementoComGetElementByTag);
console.log("-------------------------");
