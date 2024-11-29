//Write a function that receives a number and return:
// If the number is divisible by 3 = Fizz
// If the number is divisible by 5 = Buzz
// If the number is divisible by 3 and 5 = FizzBuzz
// If the number is indivisble by 3 and 5 returns the number itself
// Check if the passed argument is actually a number. If is not, return the argument itself
// Use the function with numbers from 0 to 100

function fizzBuzz (x) {
    if (typeof (x) != "number") return x;
    if (x % 3 === 0 && x % 5 === 0) return 'FizzBuzz';
    if (x % 3 === 0) return 'Fizz';
    if (x % 5 === 0) return 'Buzz';

    return x;
}

console.log('a', fizzBuzz('a'));
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}