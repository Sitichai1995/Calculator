import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "-", ".", "+"];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deletelast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
    setResult(value);
  };

  const deleteAll = () => {
    if (calc === "") {
      return;
    }
    const value = "";
    setCalc(value);
    setResult(value);
  };

  const createdigits = () => {
    const digits = [];
    for (let i = 9; i > 0; i--) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""} {calc || 0}
        </div>

        <div className="option">
          <button
            onClick={() => {
              updateCalc("+");
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              updateCalc("-");
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              updateCalc("*");
            }}
          >
            *
          </button>
          <button
            onClick={() => {
              updateCalc("/");
            }}
          >
            /
          </button>
          <button onClick={deletelast}>DEL</button>
          <button
            onClick={() => {
              deleteAll();
            }}
          >
            C
          </button>
        </div>

        <div className="digits">
          {createdigits()}
          <button
            onClick={() => {
              updateCalc("0");
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              updateCalc(".");
            }}
          >
            .
          </button>

          <button
            onClick={() => {
              calculate();
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
