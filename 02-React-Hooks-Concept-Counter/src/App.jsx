import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [counter, setCounter] = useState(5);
  let [counter, setCounter] = useState(5);

  // let counter = 5;

  const addValue = () => {
    // console.log("Value Added", Math.random());
    // console.log("Value Added", counter);
    // counter = counter + 1;

    // setCounter(counter + 1);

    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      alert("Counter is 20");
      setCounter((counter = 0));
    }
  };

  const resetValue = () => {
    setCounter((counter = 0));
  };

  const removeValue = () => {
    // console.log("Value Remove", counter);
    // setCounter(counter - 1);
    if (counter > 0) {
      setCounter(counter - 1);
    } else alert("Counter is 0");
  };
  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Add Remove</button>
      <p>Footer: {counter}</p>
      <button onClick={resetValue}>Reset Counter</button>
    </>
  );
}

export default App;
