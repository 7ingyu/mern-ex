import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello</h1>
      <div>
        <a href="/teachers">See Teachers</a>
      </div>
      <div>
        <a href="/students">See Students</a>
      </div>
    </div>
  );
}

export default App;
