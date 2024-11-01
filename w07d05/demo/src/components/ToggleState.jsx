import useToggle from '../hooks/useToggle';

const ToggleState = () => {
  // const [isOn, toggle, reset] = useToggle(true);
  const {isOn, reset, toggle} = useToggle(true);

  return (
    <div>
      <h2>ToggleState component</h2>
      <button onClick={toggle}>Toggle</button>
      { isOn && <h2>🌞</h2> }
      { !isOn && <h2>🌚</h2> }
    </div>
  );
};

export default ToggleState;
