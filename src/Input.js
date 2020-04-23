import React from "react";

function Input() {
  return (
    <>
      <div>
        <input type="text" />
        <button>초기화</button>
        <p>
          <b>값:</b>
          <span>...</span>
        </p>
      </div>
    </>
  );
}

export default Input;
