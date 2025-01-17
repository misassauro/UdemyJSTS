// const numbers = [5, 12, 43, 123, 9, 80, 30, 205, 908, 1, 0];

// const aboveTen = numbers.filter(num => num > 10);

// const debug = numbers.filter((num, index, array) => {
//     console.log(num, index, array);
//     return num > 10;
// });

const persons = [
    { name: "Misa", age: 21 },
    { name: "Aragorn", age: 100 },
    { name: "Driver", age: 25 },
    { name: "Joel", age: 65 },
    { name: "Helena", age: 60 },
    { name: "Astroboldo", age: 32 },
    { name: "Pneumoultramicroscópicossilicovulcanoconiótico", age: 10 },
];

const bigNames = persons.filter(obj => obj.name.length > 5);
console.log(bigNames);

const ageAbove50 = persons.filter(obj => obj.age > 50);
console.log(ageAbove50);

const endsWithA = persons.filter(obj => {
    return obj.name.toLowerCase().endsWith('a');
});
console.log(endsWithA);
