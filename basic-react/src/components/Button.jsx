import React, { memo, useMemo } from "react";

//---useMemo---------------------------------------------------------
export const Button = memo(({ text, onClick }) => {
  console.log("Button", text, "re-rendering");
  const result = useMemo(() => calculateSomething(), []);
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "black",
        color: "white",
        borderRadius: "20px",
        margin: "0.4rem",
      }}
    >
      {`${text} ${result}`}
    </button>
  );
});

//------------------------------------------------------------

function calculateSomething() {
  for (let i = 0; i < 10000; i++) {
    console.log("Loading...");
  }
  return 10;
}
