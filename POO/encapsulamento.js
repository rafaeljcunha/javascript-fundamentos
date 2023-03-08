class CarrinhoCompras {
  constructor() {
    this.produtoNome = null;
    this.produtoValor = 0;
    this.produtoQuantidade = 0;
    this._produtoSaldoEstoque = 10;
    this.valorTotal = 0;
  }

  _mensagemProdutoInsuficiente() {
    return "Não possuímos estoque sufieciente.";
  }

  get _temQuantidadeSuficiente() {
    return this.produtoQuantidade <= this._produtoSaldoEstoque;
  }

  get produtoValorTotal() {
    return (this.valorTotal += this.produtoQuantidade * this.produtoValor);
  }

  adicionarProduto({ produtoNome, produtoValor, produtoQuantidade }) {
    this.produtoQuantidade = produtoQuantidade;
    if (this._temQuantidadeSuficiente) {
      this.produtoNome = produtoNome;
      this.produtoValor = produtoValor;
    }
  }

  verProdutoAdicionado() {
    return this._temQuantidadeSuficiente
      ? `Produto adicionado: ${this.produtoNome}\nQuantidade: ${this.produtoQuantidade}\nValor de cada produto: ${this.produtoValor}\nValor total dos produtos: ${this.produtoValorTotal}`
      : this._mensagemProdutoInsuficiente();
  }

  limparProdutos() {
    this.produtoNome = null;
    this.produtoValor = 0;
    this.produtoQuantidade = 0;
    this.valorTotal = 0;
  }
}

function main() {
  const carrinhoCompras = new CarrinhoCompras(); // Instanciar a `Entidade` do Carrinho para uma `Identidade`, para acessarmos os métodos e atributos da Entidade

  carrinhoCompras.adicionarProduto({
    produtoNome: "Tenis adidas",
    produtoQuantidade: 10,
    produtoValor: 120,
  }); // Adicionar produto ao carrinho

  console.log(carrinhoCompras.verProdutoAdicionado()); // ver produto adicionado
}

main();
