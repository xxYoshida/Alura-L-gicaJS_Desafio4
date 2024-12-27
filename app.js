//Crie um programa que utilize o console.log para exibir uma mensagem 
// de boas-vindas.
console.log ('boas vindas!');

//Crie uma variável chamada "nome" e atribua a ela o seu nome. 
// Em seguida, utilize o console.log para exibir a mensagem
//  "Olá, [seu nome]!" no console do navegador.
let nome = prompt('Qual seu nome?');
console.log ('Olá ' + nome);

//Utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
alert ('Olá ' + nome);

//Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de 
// programação que você mais gosta?. Em seguida, armazene a resposta
//  em uma variável e mostre no console do navegador.
let linguagempreferida = prompt ('qual sua linguagem preferida?');
console.log ('sua linguagem preferida é: ' + linguagempreferida);

//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo
//  a elas valores numéricos de sua escolha. Em seguida, realize a soma 
// desses dois valores e armazene o resultado em uma terceira variável 
// chamada "resultado". Utilize o console.log para mostrar a mensagem 
// "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = prompt ('Insira o valor 1');
let valor2 = prompt ('Insira o valor 2');
valor1 = Number(valor1);
valor2 = Number(valor2);
console.log ('a soma dos valores é:' + (valor1 + valor2));

//Peça ao usuário para inserir sua idade com prompt. Com base na idade 
// inserida, utilize um if para verificar se a pessoa é maior ou menor
// de idade, exibindo uma mensagem apropriada no console.
let idade = prompt('qual sua idade?');
alert(idade >= 18 ? 'Você é maior de idade' : 'Você é menor de idade');
/* if (idade >= 18) {
    alert('Você é maior de idade');
} else {
    alert('Você é menor de idade');
} */


//Crie uma variável "numero" e peça um valor com prompt verifique se é 
// positivo, negativo ou zero. Use if-else para imprimir a respectiva 
// mensagem.
let numero = prompt('Diga um número');
while (isNaN(numero) || numero.trim() == '') { 
    numero = prompt('Insira um numero!');
}
alert(numero > 0 ? 'Positivo' : numero < 0 ? 'Negativo' : 'Zero');
/*if numero > 0 {
    alert ('Positivo');
} else if numero < 0{
    alert ('Negativo');
} else {
    alert ('Zero');
} */

//Use um loop while para imprimir os números de 1 a 10 no console.
let contador = 1
while (contador <=10) {
    console.log (contador)
    contador++;
}

//Crie uma variável "nota" e atribua um valor numérico a ela. 
// Use if-else para determinar se a nota é maior ou igual a 7 
// e exiba "Aprovado" ou "Reprovado" no console.
let nota = prompt ('Qual foi sua nota?')
alert(nota >= 7 ? 'Você foi aprovado' : 'Não foi aprovado');
/* if (nota >= 7) {
    alert('Você foi aprovado');
} else {
    alert('Não foi aprovado');
}*/

//Use o Math.random para gerar qualquer número aleatório e
// exiba esse número no console.
let numero1 = Math.random()
console.log ('número: ' + numero1);

//Use o Math.random para gerar um número inteiro entre 
// 1 e 10 e exiba esse número no console.
let numero2 = (parseInt(Math.random() * 10 + 1));
console.log ('número 2: ' + numero2)

//Use o Math.random para gerar um número inteiro entre
//  1 e 1000 e exiba esse número no console.
let numero3 = (parseInt(Math.random() * 1000 + 1));
console.log ('número 3: ' + numero3);
