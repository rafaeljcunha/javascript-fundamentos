let array = []; // Array vazio
console.log(`Array vazio: ${array}`);

console.log("---------------------------------");
array.push("Rafael"); // Adicionando um item no array
array.push("Léo"); // Adicionando um item no array
array.push("Higor"); // Adicionando um item no array
console.log(`Agora o array possui os seguintes valores: ${array}`);

console.log("---------------------------------");
const contagemArray = array.length; // Conta a quantidade de itens no Array
console.log(`Este array possui: ${contagemArray} itens`);

console.log("---------------------------------");
const deletarUltimoItem = array.pop(); // Remove o último item do array
console.log(`O item removido foi: ${deletarUltimoItem}`);
console.log(
  `Valor atualizado do array após a exclusão do último item: ${array}`
);

console.log("---------------------------------");
const deletarPrimeiroItem = array.shift(); // Remove o primeiro item do array
console.log(`O item removido foi: ${deletarPrimeiroItem}`);
console.log(
  `Valor atualizado do array após a exclusão do primeiro item: ${array}`
);

console.log("---------------------------------");
array.push("Higor");
array.push("Rafael");
array.push("Carro");
array.push("Uva");
console.log(`Novo valor do array para filtrar: ${array}`);

const filtrarPessoas = array.filter(
  (item) => item !== "Carro" && item !== "Uva"
); // Filtra elementos de um array baseado em condições
console.log(`Estas são as pessoas filtradas: ${filtrarPessoas}`);

console.log("---------------------------------");
const procurarElemento = array.find((item) => item === "Uva");
// Procura um elemento no array e quando encontrar, retorna o elemento em sí, caso não encontre, retorna undefined
console.log(`Elemento encontrado: ${procurarElemento}`);

console.log("---------------------------------");
const iterandoArray = array.map((item) => console.log(item)); // Itera por todos os itens do array

console.log("---------------------------------");
const alterandoArray = array.map((item, index) => ({
  [item]: index,
})); // Itera por todos os itens do array, alterando o retorno deste array

console.log(`Array alterado: ${JSON.stringify(alterandoArray)}`);

console.log("---------------------------------");
const pegarApenasOsIndices = alterandoArray.map((_, index) => ({
  index,
}));

console.log(
  `Alterando o array e pegando somente os valores de cada index: ${JSON.stringify(
    pegarApenasOsIndices
  )}`
);

console.log("---------------------------------");
const somaDosIndices = pegarApenasOsIndices.reduce(
  (valorAcumulado, valorAtual) => valorAcumulado + valorAtual.index,
  0
); // Somando o valor do índices do array
console.log(`Valor das somas dos índices do array: ${somaDosIndices}`);
