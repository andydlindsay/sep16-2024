import useCounter from '../hooks/useCounter';

const Counter = () => {
  const {counter, increment, decrement, incrementByN, reset} = useCounter();

  return (
    <div>
      <h2>Counter component</h2>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => incrementByN(5)}>Increment by 5</button>
      <button onClick={() => incrementByN(10)}>Increment by 10</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
