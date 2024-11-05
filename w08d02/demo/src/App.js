import './App.css';
// import ClassBased from './components/ClassBased';
import Lifecycle from './components/Lifecycle';
import {useState} from 'react';

const App = () => {
  const [showLifecycle, setShowLifecycle] = useState(false);

  return (
    <div className="App">
      <h2>Class-based Components</h2>
      <button onClick={() => setShowLifecycle(!showLifecycle)}>Toggle Lifecycle</button>

      {/* <ClassBased title="hello" age={42} newthing="other thing" /> */}
      { showLifecycle && <Lifecycle /> }
    </div>
  );
};

export default App;
