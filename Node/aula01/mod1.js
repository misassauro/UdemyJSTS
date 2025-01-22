const firstName = 'Misa';
const lastName = 'Gomes';

const talk = () => firstName + '' + lastName;

// module.exports.name = firstName;
// module.exports.lastName = lastName;
// module.exports.talk = talk;

exports.firstName = firstName;
exports.lastName = lastName;
exports.talk = talk;

this.anything = () => {};


// console.log(module.exports);
// console.log(exports);