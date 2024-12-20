import React from 'react';

const Computer = (props) => {
  const {state, toggleIsCheating} = props;

  const mappedOptions = state.options.map((option) => {
    const [choice, symbol] = option;
    return (
      <button key={choice}>
        <span role="img" aria-label={choice.toLowerCase()}>
          {state.compSelection === choice ? symbol : ' ? '}
        </span>
      </button>
    );
  });
  
  return (
    <section className="computer">
      <span
        role="img" 
        aria-label="robot" 
        data-testid="robot-head-icon"
        onClick={toggleIsCheating}
        className={ state.isCheating ? 'cheating' : '' }
      >
        🤖
      </span>
      <div>
        <h1>{state.isCheating ? 'EXTERRMINATE !' : 'Good game to you'}</h1>
        <div className="choices">
          {mappedOptions}
        </div>
      </div>
    </section>
  );
};

export default Computer;
