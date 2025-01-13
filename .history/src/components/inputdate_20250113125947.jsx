import React, { useRef } from "react";

function Inputdata() {
  const inputRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
    emailRef.current.focus();
    passwordRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <input ref={emailRef} type="email" />
      <input ref={passwordRef} type="password" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default Inputdata;
