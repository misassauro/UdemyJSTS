const fruits = ['apple', 'grape', 'banana'];

for (let i in fruits) {
    console.log(fruits[i]);
};

const person = {
    name: 'Misa',
    secondName: 'Go',
    age: 21,
}

console.log('----------------------------------------------')
for (let key in person) {
    console.log(key, person[key]);
}