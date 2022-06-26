function verifica(param1){
if(param1.split('').reverse().join('')== param1){
return true;
}else{
    return false;
}
}
console.log(verifica('arara'));
