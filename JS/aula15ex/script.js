const number = Number(prompt("Digite um número:"));
const squareRoot = number ** 0.5;
const isInteger = Number.isInteger(number);
const isNumberNaN = Number.isNaN(number);
const flooredNumber = Math.floor(number);
const ceiledNumber = Math.ceil(number);
const toFixedNumber = number.toFixed(2);

const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = number;
texto.innerHTML = `Square root of ${number}: <strong>${squareRoot}</strong> <br />`;
texto.innerHTML += `Is your number integer? <strong>${isInteger}</strong> <br />`;
texto.innerHTML += `Is your number NaN? <strong>${isNumberNaN}</strong> <br />`;
texto.innerHTML += `Your number rounded down: <strong>${flooredNumber}</strong> <br />`;
texto.innerHTML += `Your number rounded up: <strong>${ceiledNumber}</strong> <br />`;
texto.innerHTML += `Your number with two decimal places: <strong>${toFixedNumber}</strong> <br />`;
