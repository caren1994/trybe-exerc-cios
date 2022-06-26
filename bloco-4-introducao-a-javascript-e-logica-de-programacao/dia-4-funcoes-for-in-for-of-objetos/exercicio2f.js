let arrayTeste=[2,3,6,7,10,1];
function testes (arrayTeste){
for(let index=0;index<arrayTeste.length;index+=1){
   if (Math.max.apply(null,arrayTeste)){
    return arrayTeste.indexOf(Math.max.apply(null,arrayTeste));
   }else if (Math.min.apply(null,arrayTeste)){
 return arrayTeste.indexOf(Math.max.apply(null,arrayTeste));
   }
}
}
console.log(testes(arrayTeste));