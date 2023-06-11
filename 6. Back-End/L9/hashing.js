const bcrypt = require('bcrypt')

// creating the hash - bcrypt.hashSync('data', howManyTimesToShuffleIt)
const hashedPass = bcrypt.hashSync('123456', 10 ) // creating the hash
console.log(hashedPass); // $2b$10$xKcT9oRHpVjuGcGjq5Pn4OzhFrc4DXbyyVgJgsaOTebR3RlCQrhOW

// comparing password with hash bcrypt.compareSync('initial data', 'hashedData')
const resultCompare = bcrypt.compareSync('123456', '$2b$10$xKcT9oRHpVjuGcGjq5Pn4OzhFrc4DXbyyVgJgsaOTebR3RlCQrhOW')
console.log(resultCompare); // true