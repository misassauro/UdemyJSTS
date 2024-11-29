// Write a function that receives 2 numbers and returns the greatest

function returnTheGreatest(x, y) {
    if (x === y) {
        console.log('The numbers are equal');
        return;
    }

    const greatestValue = x > y ? x : y;

    console.log(`${greatestValue} is the greatest value`);
}

returnTheGreatest(10, 10);
returnTheGreatest(40, 10);

const max = (x, y) => console.log(x > y ? x : y);
max(10, 30);