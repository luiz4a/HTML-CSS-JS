// Vetor com 6 números
const numeros = [2, 7, 4, 9, 6, 1];

let pares = 0;
let impares = 0;

// olha cada número do vetor
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

// Mostra o resultado
console.log("Números:", numeros);
console.log("Quantidade de pares:", pares);
console.log("Quantidade de ímpares:", impares);
