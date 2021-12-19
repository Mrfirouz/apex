import React from "react";
import ReactDOM from "react-dom";
import Chart1 from "./chart/chart1";
import "./styles.css";

function App() {
  return <Chart1 />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
