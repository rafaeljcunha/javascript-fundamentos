class LIFO {
  array = [];

  inserirElementoPilha(elemento) {
    this.array.push(elemento);
  }

  removerElementoPilha() {
    if (this.quantidadeElementosPilha() > 0) {
      this.array.pop();
    }
  }

  mostrarPilha() {
    return this.array;
  }

  quantidadeElementosPilha() {
    return this.array.length;
  }

  zerarPilha() {
    this.array = [];
  }
}

const pilha = new LIFO();

console.log(pilha.mostrarPilha());

pilha.inserirElementoPilha("Rafael");
console.log(pilha.mostrarPilha());

pilha.inserirElementoPilha("Leonardo");
console.log(pilha.mostrarPilha());

pilha.inserirElementoPilha("Kerolayne");
console.log(pilha.mostrarPilha());

pilha.inserirElementoPilha("Nathalya");
console.log(pilha.mostrarPilha());

pilha.removerElementoPilha();
console.log(pilha.mostrarPilha());

pilha.removerElementoPilha();
console.log(pilha.mostrarPilha());

pilha.removerElementoPilha();
console.log(pilha.mostrarPilha());
