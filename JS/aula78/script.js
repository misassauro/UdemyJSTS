const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
const thirdArray = firstArray.concat(secondArray);

// console.log(thirdArray);

const fourthArray = firstArray.concat(secondArray, firstArray, 'Misa');

// console.log(fourthArray);

const concatWithSpread = [...firstArray, ...secondArray, [1, 2, 3], ...[4, 5, 6]];

console.log(concatWithSpread);