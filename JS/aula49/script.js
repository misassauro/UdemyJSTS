// let a = 'A';
// let b = 'B';
// let c = 'C';

// const letras = [b, c, a];
// [a, b, c] = letras;
// console.log(a, b, c);

const numeros = [10, 20, 30, 40, 50];
const [primeiro, segundo, terceiro, ...resto] = numeros; // rest operator
console.log(primeiro, segundo, terceiro);
console.log(resto);

//                          0          1          2
//                       0  1  2    0  1  2    0  1  2
const arrayOfArrays = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

console.log(arrayOfArrays[0][2]); // retorna 3
console.log(arrayOfArrays[1][1]) // retorna 5
console.log(arrayOfArrays[2][0]) // retorna 7