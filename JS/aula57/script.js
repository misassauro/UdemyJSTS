const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    if (number === 2) {
        console.log('Skip number 2');
        continue;
    }

    console.log(number);

    if (number === 6) {
        console.log('6 was found! Breaking for loop.');
        break;
    }
}

// DOING THE SAME ABOVE, BUT WITH FOR IN

for (let index in numbers) {
    let number = numbers[index];

    if (number === 2) {
        console.log('Skip number 2');
        continue;
    }

    console.log(number);

    if (number === 6) {
        console.log('6 was found! Breaking for loop.');
        break;
    } 
}

// WITH CLASSIC FOR

for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    if (number === 2) {
        console.log('Skip number 2');
        continue;
    }

    console.log(number);

    if (number === 6) {
        console.log('6 was found! Breaking for loop.');
        break;
    }
}

// WITH WHILE

let index = 0;
while (index < numbers.length) {
    let number = numbers[index];

    if (number === 2) {
        console.log('Skip number 2');
        index++;
        continue;
    }

    console.log(number);

    if (number === 6) {
        console.log('6 was found! Breaking for loop.');
        break;
    }

    index++;
}

// WITH DO WHILE
let newIndex = 0;
do {
    let number = numbers[newIndex];

    if (number === 2) {
        console.log('Skip number 2');
        newIndex++;
        continue;
    }

    console.log(number);

    if (number === 6) {
        console.log('6 was found! Breaking for loop.');
        break;
    }

    newIndex++;
} while(newIndex < numbers.length)

