let i = 10;

const intervalObj = setInterval(() => {
  console.log('hello', i);
  i = i - 1;

  if (i < 0) {
    clearInterval(intervalObj); // cleanup
  }
}, 500);

// console.log(intervalObj);

