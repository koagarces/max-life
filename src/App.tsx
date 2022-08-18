import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function App() {
  // const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {/* <h1>counter : {counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}></button> */}
    </div>
  );
}

export default App;
