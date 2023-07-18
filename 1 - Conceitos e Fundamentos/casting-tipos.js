const valorA = 10;
const valorB = "5";
const valorC = "Rafael";
const valorD = "";
const valorE = true;
const valorF = 0;

console.log(`valorA agora é do tipo: ${typeof valorA.toString()}`);
console.log(`valorA agora é do tipo: ${typeof String(valorA)}`);
console.log("---------------------------------");

console.log(`valorB agora é do tipo: ${typeof Number(valorB)}`);
console.log("---------------------------------");

console.log(`valorC agora é do tipo: ${typeof Boolean(valorC)}`);
console.log(`valorC agora é do tipo: ${typeof !!valorC}`);
console.log(`valorD agora é do tipo: ${typeof Boolean(valorD)}`);
console.log(`valorF agora é do tipo: ${typeof Boolean(valorF)}`);
console.log("---------------------------------");

console.log(`valorE agora é do tipo: ${typeof String(valorE)}`);
