let arrey = [2, 3, 2, 5, 8, 2, 3];
function Conta(arrey) {
  let counts = [];
  arrey.forEach(function (index) {
    counts[index] = (counts[index] || 0) + 1;
  });
  console.log(counts);
}

Conta(arrey);