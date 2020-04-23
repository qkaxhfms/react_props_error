import React from "react";

function Counter() {
  const plus = () => {
    console.log("+");
  };
  const minus = () => {
    console.log("-");
  };

  return (
    <>
      <div>
        <h1>0</h1>
        <button onClick={plus}>+1</button>
        <button onClick={minus}>-1</button>
      </div>
    </>
  );
}

export default Counter;
