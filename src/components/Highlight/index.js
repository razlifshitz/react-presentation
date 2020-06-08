import React, { useState } from "react";

function HighlightApp() {
  const [color, setColor] = useState(null);

  return (
    <>
      <h1>My First Attribute Directive</h1>

      <h4>Pick a highlight color</h4>
      <div>
        <input
          type="radio"
          name="colors"
          onClick={() => setColor("lightgreen")}
        />
        Green
        <input type="radio" name="colors" onClick={() => setColor("yellow")} />
        Yellow
        <input type="radio" name="colors" onClick={() => setColor("cyan")} />
        Cyan
      </div>
      <Highlight color={color}>Highlight me!</Highlight>
      <Highlight color={color} defaultColor={"violet"}>
        Highlight me too!
      </Highlight>
      <hr />
      <p>
        <i>Mouse over the following lines to see fixed highlights</i>
      </p>

      <Highlight color={"yellow"}>Highlighted in yellow</Highlight>
      <Highlight color={"orange"}>Highlighted in orange</Highlight>
    </>
  );
}

function Highlight({ color, defaultColor = "red", children }) {
  const [highlight, setHighlight] = useState();

  return (
    <p
      style={{ backgroundColor: highlight }}
      onMouseEnter={() => setHighlight(color || defaultColor)}
      onMouseLeave={() => setHighlight("")}
    >
      {children}
    </p>
  );
}

export default HighlightApp;
