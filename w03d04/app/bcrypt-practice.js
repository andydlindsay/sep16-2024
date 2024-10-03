const bcrypt = require('bcryptjs');

// const salt = bcrypt.genSaltSync();
// console.log('salt', salt);

// const plaintextPassword = '1234';

// const hash = bcrypt.hashSync(plaintextPassword, salt);
// console.log('hash', hash);

const storedHash = '$2a$15$z8ddRU.Z0Ner5rC2UuHHXOfgbt6FXf3dl4y67FRxVzGlRu8GGb4Nm';

const result = bcrypt.compareSync('1234', storedHash);
console.log('result', result);
