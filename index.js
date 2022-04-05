import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Daniel", 11122233309);
const cliente2 = new Cliente("Alice", 22233344409);


const contaCorrenteDaniel = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(102, cliente2);

console.log(contaCorrenteDaniel)



