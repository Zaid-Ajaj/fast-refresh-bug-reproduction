import { render } from "react-dom";
import { createElement } from "react";
import { Hello } from "./App.fs.js";

render(
    createElement(Hello, null),
    document.getElementById("feliz-app")
);