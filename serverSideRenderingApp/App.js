import { createElement as h, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return h(
    "div",
    null,
    h("h1", null, "Hello Viewers"),
    h("p", null, "This is a simple example of Server side rendering"),
    h(
      "button",
      { onClick: () => setCount(count + 1) },
      `Current Click Count: ${count}`,
    ),
  );
}

export default App;
