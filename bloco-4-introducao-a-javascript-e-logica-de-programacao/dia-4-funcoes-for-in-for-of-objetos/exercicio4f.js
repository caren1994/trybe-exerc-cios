let nomes= ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let guardaMaior=[];
function maior(param1){
for (let index=0;index < nomes.length;index+=1){
    if(guardaMaior.length < nomes[index].length){
    guardaMaior = nomes[index];
    return guardaMaior;
    }
}
}
console.log(maior(nomes));