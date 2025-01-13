import React, { useRef } from "react";

function InputData() {
  const inputRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
    emailRef.current.focus();
    passwordRef.current.focus();
    console.log(inputRef.current);
  };

  return (
    <div>
      f
      <input ref={inputRef} type="text" />
      <br />
      <input ref={emailRef} type="email" />
      <br />
      <input ref={passwordRef} type="password" />
      <br />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default InputData;
