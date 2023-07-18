class Animal {
  tipoAnimal = null;
  constructor(tipoAnimal) {
    this.tipoAnimal = tipoAnimal;
  }
  andar() {
    console.log(`O ${this.tipoAnimal} andou!`);
  }

  pular() {
    console.log(`O ${this.tipoAnimal} pulou!`);
  }
}

class Gato extends Animal {
  andar() {
    console.log(`O ${this.tipoAnimal} andou bem devagar!`);
  }
}

class Cachorro extends Animal {
  andar() {
    console.log(`O ${this.tipoAnimal} andou bem rápido!`);
  }
}

const animal = new Animal("Cavalo");
const gato = new Gato("Gato");
const cachorro = new Cachorro("Cachorro");

animal.andar();
gato.andar();
cachorro.andar();
