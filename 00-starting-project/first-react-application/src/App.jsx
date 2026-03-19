import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import User from "./User";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <User></User>
      <h1>Counter value : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Click on increase</button>
    </>
  );
}

export default App;
