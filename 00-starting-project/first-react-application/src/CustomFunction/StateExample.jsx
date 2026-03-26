import { useState } from "react";

function StateExample() {
  // State variables (xcounter, ycounter) are read-only. You cannot directly assign values to them.
  const [xcounter, setIncrement] = useState(0);
  const [ycounter, setDecrement] = useState(10);

  const doIncrment = () => {
    setIncrement((data) => data + 1);
    console.log("increment");
  };

  const doDecrement = () => {
    setDecrement((data) => data - 1);
    console.log("decrement");
  };

  const resetData = () => {
    setIncrement(0);
    setDecrement(10);
    console.log(xcounter, ycounter);
  };
  return (
    <div>
      <button onClick={doIncrment}>Click to + </button>
      {xcounter}
      <button onClick={doDecrement}>Click to - </button>
      {ycounter}
      <button onClick={resetData}>Reset</button>
    </div>
  );
}

export default StateExample;
