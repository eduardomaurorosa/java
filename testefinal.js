const prompt = require('prompt-sync')();

const codigoPreco = {
  100: 1.20,
  101: 1.30,
  102: 1.50,
  103: 1.20,
  104: 1.30,
  105: 1.00
};

let codigo;
let quantidade = 0;
let totalGeral = 0;
let totalItens = {};

console.log("Código\tQuantidade\tValor");
console.log("---------------------------------");

do {
  codigo = prompt("Código do item: ");

  if (codigo === "999") {
    break;
  }

  if (isNaN(codigo) || !codigoPreco[codigo]) {
    console.log("Código inválido. Digite novamente.");
    continue;
  }

  quantidade = parseInt(prompt("Quantidade desejada: "));

  if (isNaN(quantidade) || quantidade <= 0) {
    console.log("Quantidade inválida. Digite novamente.");
    continue;
  }

  const precoItem = codigoPreco[codigo];
  const valorItem = precoItem * quantidade;
  totalGeral += valorItem;

  if (!totalItens[codigo]) {
    totalItens[codigo] = { quantidade: quantidade, valorTotal: valorItem };
  } else {
    totalItens[codigo].quantidade += quantidade;
    totalItens[codigo].valorTotal += valorItem;
  }

  console.log(`${codigo}\t${quantidade}\t\tR$ ${valorItem.toFixed(2)}`);

} while (true);

console.log("---------------------------------");

console.log("Total de cada item:");
Object.keys(totalItens).forEach(codigoItem => {
  const item = totalItens[codigoItem];
  console.log(`${codigoItem}\t${item.quantidade}\t\tR$ ${item.valorTotal.toFixed(2)}`);
});

console.log("---------------------------------");
console.log("Total geral do pedido: R$ " + totalGeral.toFixed(2));