let alunos = ["Misa", "Lorena", "Adrilex"];

console.log(alunos[0]);
console.log(alunos.length);

alunos[alunos.length] = "TCHASA"; // Adiciona no fim
alunos.push("Claudete"); // Adiciona no fim
console.log(alunos);

alunos.unshift("Walter Conti Comendo Arroz e Frango"); // Adiciona no começo
console.log(alunos);

let removido = alunos.pop(); // Deleta um elemento do final
console.log("Quem foi removido(a) do final do array: ", removido);
console.log(alunos);

removido = alunos.shift(); // Deleta um elemento do início do array (isso altera os indíces do array)
console.log("Quem foi removido(a) do começo do array: ", removido);
console.log(alunos);

let deletado = delete alunos[1]; // Isso não altera os indíces do array, porque o que foi deletado passa a ter o valor "<1 empty item>". A variável deletado retorna "true"

console.log(deletado);
console.log(alunos);

delete alunos[0];
console.log(alunos);
// Retorna [
// <2 empty items>,
// 'Adrilex',
// 'TCHASA',
// 'Claudete Returns',
// 'Walter Conti Returns'
// ]

alunos.push("Claudete Returns", "Walter Conti Returns");
console.log(alunos);

console.log(alunos.slice(1, 5)); //Retorna [ <1 empty item>, 'Adrilex', 'TCHASA', 'Claudete Returns' ]

console.log(alunos.slice(0, -2)); // Retorna [ <2 empty items>, 'Adrilex', 'TCHASA' ]

console.log(typeof alunos); // Retorna "object", não "array"
console.log(alunos instanceof Array); // Retorna "true"

alunos = 123;

console.log(typeof alunos); // Retorna "number"
console.log(alunos instanceof Array); // Retorna "false"
