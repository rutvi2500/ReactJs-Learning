import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
ReactDOM.render(
    <h1>Hello World</h1>,
  document.getElementById("root")
);
if(module.hot) {
  module.hot.accept();
}