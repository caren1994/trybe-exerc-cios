let guardaMaior = [];
let guardaMenor='java';
let array = ["java", "javascript", "python", "html", "css"];
for (let index = 0; index < array.length; index += 1) {
  if (guardaMaior.length < array[index].length) {
    guardaMaior = array[index];
  } 
}
console.log(guardaMaior);

for (let index1 = 0; index1 < array.length; index1 += 1) {
  if (guardaMenor.length > array[index1].length) {
    guardaMenor = array[index1];
  }
  }

console.log(guardaMenor);
