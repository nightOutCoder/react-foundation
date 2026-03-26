import "./App.css";
import General from "./CustomFunction/General";
import { useState } from "react";

function App() {
  const [fruit, setFruit] = useState("Apple");

  function updateFruit() {
    setFruit("Banana");
    console.log("fruitName is ", fruit);
  }

  return (
    <>
      <h1>Fruit Name is {fruit}</h1>
      <button onClick={updateFruit}>Change Fruit</button>
      <h1>General Component Rendering:------------------:</h1>
      <General></General>
    </>
  );
}

export default App;
