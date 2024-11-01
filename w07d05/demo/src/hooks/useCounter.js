import {useState} from 'react';

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const incrementByN = (n) => {
    if (typeof n !== 'number') return;
    setCounter(counter + n);
  };

  const reset = () => {
    setCounter(0);
  };

  return { counter, increment, decrement, incrementByN, reset };
};

export default useCounter;
