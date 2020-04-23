import React, { useState } from "react";

function Input() {
  const [inputs, setInput] = useState({
    phone: "",
    email: "",
  });

  const { phone, email } = inputs;
  const change = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);

    const { name, value } = e.target;
    console.log(name);
    console.log(value);
  };
  const reset = () => {};

  return (
    <>
      <div>
        <input name="phone" placeholder="폰번" onChange={change} />
        <input name="email" placeholder="이메일" onChange={change} />
        <button onClick={reset}>초기화</button>
        <ul>
          <li>폰번호: {phone}</li>
          <li>이메일: {email}</li>
        </ul>
      </div>
    </>
  );
}

export default Input;
