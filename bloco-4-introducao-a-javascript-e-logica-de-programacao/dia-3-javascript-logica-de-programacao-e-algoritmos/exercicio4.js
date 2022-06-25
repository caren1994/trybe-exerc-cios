
// esse exercicio acha os impares com %2 !==0 e não os primos 
// tenho que procurar como achar os primos e voltar aqui 

let div = [];
let maior= [];
for (let index = 2; index <= 50; index += 1) {
  if (index % 2 !== 0) { 
    div.push(index);
  }
 
  }
console.log(div);

for (let index = 0; index < div.length; index += 1){
  if (maior > div[index]) {
    maior = maior;
  } else {
    maior = div[index];
  }
}
console.log(maior);


// multiplicar todos os numeros dentro do array pelo proximo numero,sem alterar o array original

const array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


let newArray = array

for (let i = 0; i < newArray.length; i++) {
  let nextElement = newArray[i + 1]
  const multiplica = !nextElement ? 2 : nextElement
  newArray[i] *= multiplica;
}
console.log(newArray)