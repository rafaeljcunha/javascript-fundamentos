class FIFO {
  array = [];

  inserirElementoNaFila(elemento) {
    this.array.push(elemento);
  }

  removerElementoDaFila() {
    if (this.quantidadeElementosNaFila() > 0) {
      this.array.shift();
    }
  }

  mostrarFila() {
    return this.array;
  }

  quantidadeElementosNaFila() {
    return this.array.length;
  }

  zerarFila() {
    this.array = [];
  }
}

const fila = new FIFO();
console.log(fila.mostrarFila());

fila.inserirElementoNaFila("Rafael");
console.log(fila.mostrarFila());

fila.inserirElementoNaFila("Leonardo");
console.log(fila.mostrarFila());

fila.inserirElementoNaFila("Kerolayne");
console.log(fila.mostrarFila());

fila.inserirElementoNaFila("Nathalya");
console.log(fila.mostrarFila());

fila.removerElementoDaFila();
console.log(fila.mostrarFila());

fila.removerElementoDaFila();
console.log(fila.mostrarFila());

fila.removerElementoDaFila();
console.log(fila.mostrarFila());
