import React from "react";
import useWindowSize from "../hooks/useWindowSize";

function WindowSize() {
  const { width, height } = useWindowSize();

  return (
    <React.Fragment>
      <h2>
        Window size: ({width} x {height})
      </h2>
    </React.Fragment>
  );
}

export default WindowSize;
