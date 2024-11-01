import {useState} from 'react';

const useInput = () => {
  const [value, setValue] = useState('');
  
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const empty = () => {
    setValue('');
  };
  
  return {value, onChange, onBlur: empty};
};

export default useInput;
