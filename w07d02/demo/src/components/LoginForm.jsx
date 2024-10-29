import {useState} from 'react';

let username = 'alice';
let password = '';

const LoginForm = () => {
  const [username, setUsername] = useState('alice');
  const [password, setPassword] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    alert(`you are trying to sign in as ${username} with password ${password}`);
  };

  return (
    <div>
      <h2>Login Below!</h2>

      <form onSubmit={submitHandler}>
        <div>
          <label>Username</label>
          <input 
            value={username}
            onChange={(event) => { setUsername(event.target.value) }}
          />
        </div>
        <div>
          <label>Password</label>
          <input 
            value={password}
            onChange={(event) => { setPassword(event.target.value) }}
          />
        </div>
        <button type="submit">Login!</button>
      </form>
    </div>
  );
};

export default LoginForm;
