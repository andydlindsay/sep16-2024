import useList from "../hooks/useList";
import useInput from "../hooks/useInput";

const List = () => {
  const { 
    list, 
    addValueToList, 
    removeValueFromList, 
    sortList 
  } = useList([1,2,3]);

  const newValueObj = useInput('');

  return (
    <div>
      <h2>List Component</h2>

      <label>New Value:</label>
      <input 
        value={newValueObj.value}
        onChange={newValueObj.onChange}
      />
      <button onClick={() => addValueToList(newValueObj.value)}>Add</button>
      <button onClick={sortList}>Sort</button>

      { list.map((el, index) => {
        return <p key={index}>{el} <button onClick={() => removeValueFromList(el)}>x</button></p>;
      }) }
    </div>
  );
};

export default List;
