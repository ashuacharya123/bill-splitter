import React, { useState } from "react";
import logo from "./images/logo.svg";
import "./App.css";

function App() {
  const [state, setstate] = useState(0);
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [err, setErr] = useState(0);

  const finalAnswer = (tipPercent) => {
    setTip(tipPercent);
    if (people !== 0 && people !== undefined && bill !== "") {
      const value = (bill * (tipPercent / 100)) / people;
      setTipAmount(value);
      setTotal(value + bill / people);
    }
    if (people === "") {
      setErr(2);
      if (bill === "") {
        setErr(12);
      }
    }

    if (bill === "") {
      setErr(1);
      if (people === "") {
        setErr(12);
      }
    }
  };

  const reset = () => {
    setBill("");
    setTip(0);
    setTotal(0);
    setPeople("");
    setTipAmount(0);
    setErr(0);
    setstate(0);

    document.querySelector(".btn__input").value = "";
  };

  return (
    <div className="container">
      <div className="content">
        <img src={logo} alt="logo" className="content__logo" />
        <div className="app">
          <div className="app__upper">
            <h3 className="app__heading">Bill</h3>
            <h3
              className="app__heading app__heading__error "
              id={err === 1 || err === 12 || err === 21 ? "error" : ""}
            >
              Can't be zero
            </h3>
            <input
              className="app__input"
              type="number"
              placeholder="0"
              value={bill}
              onClick={(e) => setErr(0)}
              onChange={(e) => setBill(e.target.value)}
            />
            <h3 className="app__heading">Select Tip %</h3>
            <div className="app__grid">
              <button
                className="btn"
                id={state === "a" ? "btn-change" : ""}
                onClick={(e) => {
                  finalAnswer(5);
                  setstate("a");
                }}
              >
                5%
              </button>
              <button
                className="btn"
                id={state === "b" ? "btn-change" : ""}
                onClick={(e) => {
                  finalAnswer(10);
                  setstate("b");
                }}
              >
                10%
              </button>
              <button
                className="btn"
                id={state === "c" ? "btn-change" : ""}
                onClick={(e) => {
                  finalAnswer(15);
                  setstate("c");
                }}
              >
                15%
              </button>
              <button
                className="btn"
                id={state === "d" ? "btn-change" : ""}
                onClick={(e) => {
                  finalAnswer(25);
                  setstate("d");
                }}
              >
                25%
              </button>
              <button
                className="btn"
                id={state === "e" ? "btn-change" : ""}
                onClick={(e) => {
                  finalAnswer(50);
                  setstate("e");
                }}
              >
                50%
              </button>
              <input
                className="btn btn__input"
                placeholder="Custom"
                onClick={(e) => setstate(0)}
                onChange={(e) => finalAnswer(e.target.value)}
              />
            </div>
            <h3 className="app__heading">Number of People</h3>
            <h3
              className="app__heading app__heading__error "
              id={err === 2 || err === 12 || err === 21 ? "error" : ""}
            >
              Can't be zero
            </h3>
            <input
              className="app__input"
              type="number"
              placeholder="0"
              value={people}
              onClick={(e) => setErr(0)}
              onChange={(e) => setPeople(e.target.value)}
            />
          </div>

          <div className="app__lower">
            <h3 className="app__lower__heading app__heading">
              Tip Amount <span>/ person</span>
            </h3>
            <span className="app__lower__dollar">
              ${parseFloat(tipAmount).toFixed(2)}
            </span>
            <h3 className="app__heading app__lower__heading">
              Total <span>/ person</span>
            </h3>
            <span className="app__lower__dollar">
              ${parseFloat(total).toFixed(2)}
            </span>
            <button onClick={(e) => reset()}>RESET</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
