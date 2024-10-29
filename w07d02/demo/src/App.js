import './App.css';

// import Header from './components/Header';
// import Counter from './components/Counter';
import LoginForm from './components/LoginForm';

// render => when a component function gets called and returns some JSX

const App = () => {
  return (
    <div className="App">
      <h2>React State</h2>
      {/* <Header message="welcome to our website" />
      <Header message="about us" />
      <Header message="login below" /> */}
      {/* <Counter /> */}
      <LoginForm />
    </div>
  );
};

export default App;
