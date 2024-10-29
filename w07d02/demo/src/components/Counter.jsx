import {useState} from 'react';
// React craves our data

const Counter = () => {

  // argument is default/initial state

  // const returnArr = useState(0);
  // const count = returnArr[0];
  // const setCount = returnArr[1];

  const [count, setCount] = useState(0);

  const increment = () => {
    // count += 1;
    setCount(count + 1); // 42 + 1 = 43
    console.log(count);
  };

  return (
    <div>
      <h2>Counter Component</h2>
      <h2>Count: { count }</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
