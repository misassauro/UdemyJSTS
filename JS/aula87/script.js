const numbers = [5, 12, 90, 30, 123, 53, 34, 55, 25, 76, 100, 97, 1093];

const allTogether = numbers
    .filter(num => num % 2 === 0)
    .map(num => num * 2)
    .reduce((ac, num) => ac + num);

console.log(allTogether);