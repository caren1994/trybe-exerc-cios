let array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];
let numerosDiv = [];
let resultDivisao = [];
for (let index = 0; index < array.length; index += 1) {
  numerosDiv = array[index] / 2;
  resultDivisao.push(numerosDiv);
}
console.log(resultDivisao);

