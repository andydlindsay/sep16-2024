// primitives are passed to functions by value (given a copy of the value)

// const changeToFour = function(num) {
//   num = 4;
//   console.log('inside the function', num); // 4
// };

// let myNum = 42;

// changeToFour(myNum);

// console.log(myNum); // 42 or 4 ???

// objects are passed to functions by reference (which means you get the original object)

const changeMyObject = function(obj) {
  obj.username = 'bob';
  console.log('inside the function', obj.username); // 'bob'
};

const user = {
  username: 'alice'
};

changeMyObject(user);

console.log('after the function call', user.username); // 'alice' or 'bob'
