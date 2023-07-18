class ContaBancaria {
  constructor({ agencia, numeroConta }) {
    this.agencia = agencia;
    this.numeroConta = numeroConta;
    this.limiteDiario = 1500;
    this.saldo = 0;
  }

  consultarSaldo() {
    return this.saldo;
  }

  depositarDinheiro(valorDepositado) {
    this.saldo += valorDepositado;
    console.log(`Valor depositado: ${valorDepositado}`);
  }

  sacarDinheiro(valorSacado) {
    this.saldo -= valorSacado;
    console.log(`Valor sacado: ${valorSacado}`);
  }
}

function main() {
  const contaBancaria = new ContaBancaria({
    agencia: "1234",
    numeroConta: "012345-1",
  }); // Instanciar a `Entidade` do Carrinho para uma `Identidade`, passando para o constructor, a agência e conta, para acessarmos os métodos e atributos da Entidade

  console.log(`Seu saldo é: ${contaBancaria.consultarSaldo()}`); // Consultar Saldo

  contaBancaria.depositarDinheiro(150); // Depositar dinheiro

  console.log(`Seu saldo é: ${contaBancaria.consultarSaldo()}`); // Consultar Saldo

  contaBancaria.sacarDinheiro(60); // Sacar dinheiro

  console.log(`Seu saldo é: ${contaBancaria.consultarSaldo()}`); // Consultar Saldo
}

main();
