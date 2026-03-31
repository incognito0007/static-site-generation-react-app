import { createElement as h } from "react";

function App() {
  return h(
    "div",
    null,
    h("h1", null, "Hello Everyone"),
    h(
      "p",
      null,
      "Welcome to React Server Side Generation",
      h("span", null, "!!!"),
    ),
  );
}

export default App;
