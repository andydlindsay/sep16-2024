import {useState} from 'react';

const useToggle = (initialState) => {
  const [isOn, setIsOn] = useState(initialState);

  const toggle = (val) => {
    setIsOn(!isOn);
  };

  const reset = () => {
    setIsOn(initialState);
  };

  // return [isOn, toggle, reset];
  return {isOn, toggle, reset};
};

export default useToggle;
