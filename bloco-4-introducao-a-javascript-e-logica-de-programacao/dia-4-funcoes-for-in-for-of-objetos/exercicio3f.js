let arrayTeste=[2,4,6,7,10,0,-3];
function testes (arrayTeste){
for(let index=0;index<arrayTeste.length;index+=1){
   return  arrayTeste.indexOf(Math.min.apply(null,arrayTeste));
}
}
console.log(testes(arrayTeste));