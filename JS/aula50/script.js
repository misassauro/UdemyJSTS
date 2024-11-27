const person = {
    name: 'Misa',
    secondName: 'Gomes',
    age: 21,
    address: {
        street: 'Rua Parati',
        number: 117,
    }
}

const { name, secondName, age } = person;
// const { name: anotherVariable } = person;
// console.log(anotherVariable, secondName, age);

// const { address } = person;
// console.log(address);
// const { address: {street, number}} = person;
// console.log(street, number);

const { address: {
    street: rua = 'default value',
    number: numero = 0
}
} = person;

// console.log(address); // não funciona
// console.log(street); // não funciona
console.log(rua, numero); // funciona

const { name: anotherVariableForName, ...rest} = person;
console.log(rest);
