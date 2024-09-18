const studentOneName = 'alice';
const cohort = 'sep 16 2024';
const age = 42;

// const studentOne = ['alice', 'sep 16 2024', 42, false];
// new Array(); // []

// objects are collections of key/value pairs
// JS objects, Ruby hash, Python dictionary, PHP associative arrays

// const myObj1 = { studentName: "alice", cohort: 'sep 16 2024', age: 42 };

const studentOne = {
  studentName: "alice", 
  cohort: 'sep 16 2024', 
  age: 42 
};

// console.log(studentOne);

// const keyIWant = 'age';
// studentOne[keyIWant];

// console.log()
// console['log']()

// studentOne.cohort

const address = {
  city: 'toronto',
  addressDetails: {
    streetInfo: {
      streetNumber: 1234
    }
  }
};

// rule of thumb: if you know the name of the key, use dot syntax. If the key is dynamic (stored in a variable), use square brackets.

const myPersonalKey = 'city';
console.log(address[myPersonalKey])
console.log(address.myPersonalKey); // undefined

// console.log(address);

// console.log(address['addressDetails']);
// console.log(address['addressDetails']['streetInfo']['streetNumber']);
// console.log(address.addressDetails.streetInfo.streetNumber);


// studentOne['cohort'] = 'jan 22 2025';

// console.log(studentOne);

// console.log('cohort', studentOne['cohort']);
