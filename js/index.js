//1) Escreva um programa que apresente quatro opções: (a) consulta
//saldo, (b) saque e (c) depósito e (d) sair. O saldo deve iniciar
//em R$ 0,00. A cada saque ou depósito o valor do saldo deve ser
//atualizado.

var sake = 0;
var deposit = 0;
var sold = 5000;
var limit = 800;
var newSold = 0;

do {
  var option = prompt("Digite A para consultar seu saldo / B para sacar / C para depositar / D para sair");

    if(option === "A") {
      alert("Seu saldo é " + sold);
    }

    if (option === "B") {
    sake = parseFloat(prompt("Digite a quantia para efetuar o saque"));
    if (sake > 800) {
      alert("Desculpe, você só pode efeituar o saque com limite de R$ 800,00");
    }else if (sake <= 800) {
      newSold = sold - sake;
      alert("Você sacou " + sake);
      alert("Seu saldo atual é " + newSold);
    }
  }

    if (option === "C") {
    deposit = parseFloat(prompt("Digite quanto você quer depositar"));
      if (deposit > 0) {
      newSold = deposit + sold;
        alert("Você depositou " + deposit);
        alert("Seu saldo atual é " + newSold);
    }
  }

}while (option !== "D")
