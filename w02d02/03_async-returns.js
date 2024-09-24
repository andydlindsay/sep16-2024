const higherOrderFunc = (callback) => {
  const data = { username: 'alice' };

  console.log('1. above the settimeout');
  
  setTimeout(() => {
    console.log('2. inside the settimeout');
    data.username = 'bob';
    callback(data, [], true, false, 'hello');
  }, 2000);

  console.log('3. below the settimeout');
};

console.log('4. above the main call');

higherOrderFunc((data, arg1, arg2, ) => {
  console.log('data in the callback', data);
  console.log('6. inside the callback');
});

console.log('5. below the main call');
