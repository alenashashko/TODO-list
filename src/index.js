import './style.css';

import React from "react";
import ReactDom from "react-dom";

import {ExampleComponent} from "./ExampleComponent";

ReactDom.render(
  <ExampleComponent />,
  document.querySelector(`#root`)
);