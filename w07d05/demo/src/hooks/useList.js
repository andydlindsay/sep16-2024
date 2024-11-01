// manage the state of an array
// add new elements to the array
// remove elements from the array
// take in a default value (optional)
// sort the array

import {useState} from 'react';

const useList = (initialValue = []) => {
  const [list, setList] = useState(initialValue);


  const addValueToList = (value) => {
    // const copy = [...list, value];
    // copy.push(value);

    setList([...list, value]);
  };

  const removeValueFromList = (value) => {
    // filter returns a new array reference
    // const filtered = list.filter((element) => {
    //   return element !== value;
    // });

    setList(list.filter((element) => {
      return element !== value;
    }));
  };

  const sortList = () => {
    const copy = [...list];
    copy.sort();

    // const copy = list.toSorted();
    setList(copy);
  };

  return { list, addValueToList, removeValueFromList, sortList };
};

export default useList;
