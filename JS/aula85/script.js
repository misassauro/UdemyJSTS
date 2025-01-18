const numbers = [5, 12, 90, 30, 123, 53, 34, 55, 25, 76, 100, 97, 1093];

const double = numbers.map(num => num * 2);
// console.log(double);

const persons = [
    { name: "Misa", age: 21 },
    { name: "Aragorn", age: 100 },
    { name: "Driver", age: 25 },
    { name: "Joel", age: 65 },
    { name: "Helena", age: 60 },
    { name: "Astroboldo", age: 32 },
    { name: "Pneumoultramicroscópicossilicovulcanoconiótico", age: 10 },
];

const onlyNames = persons.map(obj => obj.name); // persons.map(function(obj) {return obj.name}) would do the same
console.log(onlyNames);

const onlyAge = persons.map((obj) => {
    delete obj.name;
    return obj;
});
console.log(onlyAge);

const anotherOnlyAge = persons.map(obj => ({age: obj.age}));
console.log(anotherOnlyAge)

const personsWithIds = persons.map((obj, index) => {
    obj.id = index + 1;
    return obj;
});

console.log(personsWithIds);

console.log(persons); // the original array has changed

// To avoid changing the original array, we could make like this:

const anotherPersonsWithIds = persons.map((obj, index) => {
    const newObj = { ...obj };
    newObj.id = index + 1;

    return newObj;
})