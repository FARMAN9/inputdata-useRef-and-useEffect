import React, { useRef } from "react";

function inputdata() {
  const inputRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
    emailRef.
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <input ref={inputRef} type="text" />
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default inputdata;
