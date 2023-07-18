class Produto {
  constructor({ cor, tamanho, genero }) {
    this.cor = cor;
    this.tamanho = tamanho;
    this.genero = genero;
  }

  usar() {
    console.log("Usar");
  }
}

class Tenis extends Produto {
  constructor({ cor, tamanho, genero }) {
    super({ cor, tamanho, genero });
  }

  amarrar() {
    console.log("Amarrar");
  }
}

class Caderno extends Produto {
  constructor({ cor, tamanho, genero, paginas, adesivos, folhasDestacaveis }) {
    super({ cor, tamanho, genero });
    this.paginas = paginas;
    this.adesivos = adesivos;
    this.folhasDestacaveis = folhasDestacaveis;
  }

  removerAdesivo() {
    console.log("Remover adesivo");
  }

  destacarFolha() {
    console.log("Destacar folha");
  }
}

function main() {
  let array = [];
  const tenis = new Tenis({ cor: "Verde", genero: "Masculino", tamanho: 40 });
  console.log(tenis);
  tenis.usar();

  console.log("----------------------");
  const caderno = new Caderno({
    adesivos: true,
    cor: "Rosa",
    folhasDestacaveis: false,
    genero: "Feminino",
    paginas: 100,
    tamanho: 30,
  });
  console.log(caderno);
  caderno.usar();
  console.log("----------------------");

  const transformarTenisEmObjeto = Object.assign({}, tenis);
  const transformarCadernoEmObjeto = Object.assign({}, caderno);
  array.push(transformarTenisEmObjeto, transformarCadernoEmObjeto);
  console.log(array);
}

main();
