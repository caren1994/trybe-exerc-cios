// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numImpar;
// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 !== 0) {
//     numImpar.push(numbers[index]);
//   } else {
//     console.log("nenhum valor ímpar encontrado");
//   }
// }
// console.log("numeros impares", numImpar);
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numImpar = [];
for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    numImpar.push(numbers[index]);
 }
}
 if(numImpar.length===0){
    console.log('nenhum valor Impar')
 }else{
    console.log(numImpar.length)
}
