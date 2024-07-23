// Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - tem seus valores copiados

let a = "A";
let b = a;
console.log(a, b);

//Referência (mutável) - array, object, function - tem seus valores passados por referência (apontam para o valor na memória)

let arrayA = [1, 2, 3]
let arrayB = arrayA;
let arrayC = arrayB;
console.log(arrayA, arrayB);

arrayA.push(4);
console.log(arrayA, arrayB);

arrayB.pop();
console.log(arrayA, arrayB);
