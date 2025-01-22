const numbers = [5, 10, 90];

let accumulator = 0;
numbers.forEach(element => {
    accumulator += element;
});

console.log(accumulator);