let soma=0;
for (let index = 35; index <= 105; index += 1) {
  soma=soma + index;
  }

console.log(soma);
// 2. Crie um algoritmo que conte quantos números do intervalo entre 15 e 155
// são divisíveis por 3.Caso a quantidade de números impares seja igual ou
// maior que 50, exiba uma mensagem secreta a sua escolha.
let div=0;
for (let index=15;index<=155;index+=1){
if([index]%3===0);{
    div=div+1
}
}console.log(div);

if(div>=50){
    console.log("menssagem secreta");
}
// 3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura"
//  levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// // "Jogador 1 vence" ou "Empate" ou "Jogador 2 vence".
let jogador1 = "pedra";
let jogador2 = "tesoura";
if (jogador1 === "pedra" && jogador2 === "tesoura") {
  console.log("jogador 1 vence");
} else if (jogador1 === "tesoura" && jogador2 === "papel") {
  console.log("jogador 1 ganha");
} else if (jogaddor1 === "papel" && jogador2 === "tesoura") {
  console.log("jogador 2 ganha");
} else if (jogador1 === jogador2) {
  console.log(empate);
}

// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: "A pessoa é maior de idade" ou "A pessoa é menor de idade".
// Bônus: Crie a condição utilizando operador ternário.

let maiorIdade=18;
let caren=27;
let davi=8;
if ( caren >= maiorIdade){
    console.log("a pessoa é maior de idade");
}
console.log(davi >= maiorIdade ? 'A pessoa é maior de idade' : 'A pessoa é menor de idade');

// 5. Crie um algoritmo que recebe a idade de Ademar, Adriana e Julia e imprima quem é a mais nova no formato:
// "Pessoa" é a mais nova.

let ademar=55;
let adriana=30;
let julia=26;

if(ademar<adriana && ademar<julia){
    console.log("ademar mais novo")
}else if( adriana<ademar && adriana < julia){
    console.log("adriana mais nova")
}   else{
console.log("julia mais nova")
 }
