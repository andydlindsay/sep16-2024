// import {useState} from 'react';
import useInput from '../hooks/useInput';

const LoginForm = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const usernameObj = useInput();
  const passwordObj = useInput();

  const submitHandler = (event) => {
    event.preventDefault();

    alert(`you are trying to sign in as ${usernameObj.value} with password ${passwordObj.value}`);
  };

  return (
    <div>
      <h2>Login Below!</h2>
      <form onSubmit={submitHandler}>
        <label>Username</label>
        {/* controlled input */}
        <input 
          value={usernameObj.value}
          onChange={usernameObj.onChange}
        />
        <br/>
        <label>Password</label>
        <input 
          { ...passwordObj }
        />
        <br/>
        <button type="submit">Login!</button>
      </form>
    </div>
  );
};

export default LoginForm;
