let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0;
let mediaa=0;

for (let index=0;index < numbers.length;index+=1){
    soma+= numbers[index];
mediaa=soma/numbers.length;
}
// console.log(mediaa);
if (soma/numbers.length>20){
    console.log('valor maior que 20' , soma/numbers.length);
 }else {
console.log('valor menor ou igual a 20' , soma/numbers.length);
 }