import React, { useState } from "react";

function Input() {
  const [input, setInput] = useState("");

  const change = (e) => {
    // console.log(e.target.value);
    setInput(e.target.value);
  };
  const reset = () => {
    setInput("");
  };

  return (
    <>
      <div>
        <input type="text" onChange={change} value={input} />
        <button onClick={reset}>초기화</button>
        <p>
          <b>값:</b>
          <span>{input}</span>
        </p>
      </div>
    </>
  );
}

export default Input;
