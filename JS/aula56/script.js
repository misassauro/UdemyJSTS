function randomNumber(min, max) {
    const randomInt = Math.random() * (max - min) + min;
    return Math.floor(randomInt);
}

const min = 1;
const max = 50;
// let randomInt = randomNumber(min, max);
let randomInt = 10;

while (randomInt !== 10) {
    randomInt = randomNumber(min, max);
    console.log(randomInt);
}

console.log('-----------------------------------------')

do {
    randomInt = randomNumber(min, max);
    console.log(randomInt);
} while (randomInt !== 10);