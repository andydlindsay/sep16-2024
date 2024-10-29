// class-based
// class Counter {
//   constructor() {
//     this.count = 0;
//   }

//   increment() {
//     this.count += 1;
//     console.log(this.count);
//   }
// }

// const counter = new Counter();

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// closure => function remembers what was in scope when it was declared
const age = 42;
let count = 0;

const increment = () => {
  count += 1;
  console.log(count);
};

increment();
increment();
increment();
increment();
increment();