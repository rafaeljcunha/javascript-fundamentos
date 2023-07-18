const array = [1, 2, 3, 4, 5];

for (let [index] of array.entries()) {
  console.log(`for of: ${index}`);
}

console.log("---------------------------------");
for (let item in array) {
  console.log(`for in: ${item}`);
}

console.log("---------------------------------");
for (let index = 0; index < 5; index++) {
  console.log(`for: ${index}`);
}

console.log("---------------------------------");
let vezes = 0;
while (vezes < array.length) {
  vezes++;
  console.log(`Rodando o while: ${vezes} vezes`);
}
