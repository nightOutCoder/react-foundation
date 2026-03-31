import "./App.css";
import General from "./CustomFunction/General";
import { useState } from "react";
import Display from "./CustomFunction/Display";
import ControlledComponent from "./CustomFunction/ControlledComponent";

function App() {
  const [fruit, setFruit] = useState("Apple");
  const [display, setDisplay] = useState(true);

  function updateFruit() {
    setFruit("Banana");
    console.log("fruitName is ", fruit);
  }

  return (
    <>
      <button onClick={updateFruit}>Change Fruit</button>
      <h1>Fruit Name is {fruit}</h1>
      <button onClick={() => setDisplay(!display)}>Toggle..</button>
      {display ? <h1>conditional rendering</h1> : null}
      {display ? <Display></Display> : null}
      <General></General>
      <hr></hr>
      <ControlledComponent></ControlledComponent>
    </>
  );
}

export default App;
