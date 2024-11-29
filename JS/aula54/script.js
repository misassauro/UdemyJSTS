const name = 'Misael';

console.log('--------------------- FOR OF ---------------------')
for (let value of name) {
    console.log(value);
}

const arrayOfNames = ['Misael', 'Aiden', 'TBONE'];

for (let name of arrayOfNames) {
    console.log(name); // returns value
}

// The others FOR LOOP

console.log('--------------------- FOR IN ---------------------')
for (let index in arrayOfNames) {
    console.log(index, arrayOfNames[index]); // returns index
}

console.log('------------------ CLASSIC FOR ------------------')
for (let i = 0; i < arrayOfNames.length; i++) {
    console.log(i, arrayOfNames[i]);
}

console.log('--------------------- FOREACH ---------------------')

arrayOfNames.forEach(function(element, index, array) {
    console.log(element, index, array);
})

// WITH OBJECTS
console.log('------------------ USING OBJECTS ------------------')

const person = {
    name: 'Misa',
    age: 18,
};

for (let key in person) {
    console.log(key, person[key]);
}

for (let value of person) {
    // returns error because the object person is not iterable
}

// Classic for - normally used with iterables (arrays or strings)
// For in - returns the index/key of a string, arrays or objects
// For of -  returns the value itself of iterables (arrays or strings)