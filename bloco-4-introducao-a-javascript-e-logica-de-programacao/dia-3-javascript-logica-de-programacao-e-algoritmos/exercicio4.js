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
