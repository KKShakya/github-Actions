import logo from "./logo.svg";
import {useState} from 'react'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      {count}
      <div>
        <button onClick={() => setCount(count + 1)}></button>
        <button onClick={() => setCount(count - 1)}></button>
      </div>
    </div>
  );
}

export default App;
