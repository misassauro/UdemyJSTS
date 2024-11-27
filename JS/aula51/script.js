// i - index
for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}

for (let i = 500; i >= 200; i -= 10) {
    console.log(`Linha ${i}`)
}

for (let i = 0; i <= 100; i++) {
    const par = i % 2 === 0 ? 'é par' : 'é ímpar';
    console.log(i, par);
}

//                0         1       2
const frutas = ['maçã', 'banana', 'uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta no índice ${i}: ${frutas[i]}`)
}