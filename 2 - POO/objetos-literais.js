//Objeto literal e estático
var objeto = {
  //chave: valor
  titulo: "Caderno",
  //chave: valor
  preco: 12.9,
  //chave: valor
  descricao: "Caderno para anotações de programação",
  //chave: valor
  fabricacao: "12/2022",
  //chave: valor
  lote: "cpadp122022",
};

console.log("Objeto literal estático", objeto);

// Modificando os valores
objeto.titulo = "Notebook";
objeto.preco = 1499.9;
objeto.descricao = "Notebook para estudos e jogos, perfeito para o dia a dia";
objeto.fabricacao = "03/2023";
objeto.lote = "npej032023";

console.log("Objeto literal modificado", objeto);

// Adicionando valores
objeto.memoriaRam = "16GB";
objeto.capacidadeArmazenamento = "2TB";
objeto.tipoArmazenamento = "SSD";
objeto.processador = "Intel core i9 10 geração";

console.log("Objeto literal com novos valores adicionados", objeto);
