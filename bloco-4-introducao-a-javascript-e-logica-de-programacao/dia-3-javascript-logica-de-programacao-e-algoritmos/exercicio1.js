
const array=[10,9,8,7,6,5,4,3,2,1];
let fatorial=array[0];

for(let index=0;index<array.length;index+=1){
  const nextElement=!array[index+1]? 1 : array[index+1]; 
  fatorial*=nextElement;
}
console.log(fatorial);
