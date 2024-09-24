console.log('1. top of file');

// async code cannot run until ALL sync code is done

const timeoutObj = setTimeout(() => {
  console.log('2. inside the second timeout');
}, 10000); // 1


setTimeout(() => {
  clearTimeout(timeoutObj)
}, 3000);

// console.log(timeoutObj);

console.log('3. bottom of file');

// async code


// 1,2,3