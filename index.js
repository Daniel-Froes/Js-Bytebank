import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Daniel";
cliente1.cpf = "1122233309";

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = "22233344409";

const contaCorrenteDaniel = new ContaCorrente();

contaCorrenteDaniel.agencia = 1001;
contaCorrenteDaniel.cliente = cliente1;
contaCorrenteDaniel.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

contaCorrenteDaniel.transferir(200, conta2)

console.log(conta2)


