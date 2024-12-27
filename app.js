console.log ('boas vindas!');

let nome = prompt('Qual seu nome?');
console.log ('Olá ' + nome);

alert ('Olá ' + nome);

let linguagempreferida = prompt ('qual sua linguagem preferida?');
console.log ('sua linguagem preferida é: ' + linguagempreferida);

let valor1 = prompt ('Insira o valor 1');
let valor2 = prompt ('Insira o valor 2');
valor1 = Number(valor1);
valor2 = Number(valor2);
console.log ('a soma dos valores é:' + (valor1 + valor2));

let idade = prompt('qual sua idade?');
alert(idade >= 18 ? 'Você é maior de idade' : 'Você é menor de idade');
/* if (idade >= 18) {
    alert('Você é maior de idade');
} else {
    alert('Você é menor de idade');
} */

let contador = 1
while (contador <=10) {
    console.log (contador)
    contador++;
}

let nota = prompt ('Qual foi sua nota?')
alert(nota >= 7 ? 'Você foi aprovado' : 'Não foi aprovado');
/* if (nota >= 7) {
    alert('Você foi aprovado');
} else {
    alert('Não foi aprovado');
} */


let numero1 = Math.random()
console.log ('número: ' + numero1);

let numero2 = (parseInt(Math.random() * 10 + 1));
console.log ('número 2: ' + numero2)

let numero3 = (parseInt(Math.random() * 100 + 1));
console.log ('número 3: ' + numero3);
