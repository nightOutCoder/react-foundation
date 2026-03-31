import { useState } from "react";

function Input() {
  const [val, setVal] = useState();
  return (
    <div>
      <h1>Enter Value</h1>
      <input
        type="text"
        value={val}
        onChange={(event) => setVal(event.target.value)}
      ></input>
      {val}
      <br></br>
      <button onClick={() => setVal("")}>Clear</button>
    </div>
  );
}
export default Input;
