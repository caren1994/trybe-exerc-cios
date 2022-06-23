let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor;
for (let index=0;index<numbers.length;index+=1){

    if (menorValor<numbers[index] ) {
        menorValor=menorValor
     }else{
        menorValor=numbers[index]
     }
    }
    console.log('menor numero é' ,menorValor)
