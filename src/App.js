import React, { useState } from "react";
import { useScroll, interpolate } from "react-ui-animate";

import "./styles.css";

export default function App() {
  const [y, setY] = useState(0);

  useScroll(({ scrollY }) => {
    setY(scrollY);
  });

  const left = interpolate(y, [0, 400], [0, 100], { extrapolate: "clamp" });
  const backgroundColor = interpolate(y, [0, 400], ["#3399ff", "red"], {
    extrapolate: "clamp"
  });

  return (
    <>
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: backgroundColor,
          position: "fixed",
          left: left,
          top: 0
        }}
      />

      <div style={{ height: 2000 }} />
    </>
  );
}
