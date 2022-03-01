const calc=require("./calculadora")


var soma=calc.soma('2',4);
var divisao=calc.divisao(4,2);

console.log(`Resultado da soma: ${calc.soma('2',4)}`);
console.log(`Resultado da subtração: ${calc.subtracao(2,4)}`);
console.log(`Resultado da multiplicação: ${calc.multiplicacao(4,5)}`);
console.log(`Resultado da divisão: ${calc.divisao(4,0)}`);
console.log(`Resultado da divisão: ${calc.divisao('4',2)}`);

