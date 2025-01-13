import { useEffect, useState, memo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Clock from "./components/Clock";
import InputData from "./components/inputdate";

function App() {
  const [time, setTime] = useState(new Date());
  const [data, setdata] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 3000);

    // Cleanup interval on component unmount
    console.log(timer);
    return () => clearInterval(timer);
  }, []);
  const inputRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
    emailRef.current.focus();
    passwordRef.current.focus();
    setdata({
      i
    })
  };

  return (
    <>
      <InputData />

      <div>
        <input ref={inputRef} type="text" required />
        <br />
        <input ref={emailRef} type="email" />
        <br />
        <input ref={passwordRef} type="password" />
        <br />
        <button onClick={focusInput}>Focus Input</button>
      </div>

      <hr />
      <Clock time={time} state={data} />
    </>
  );
}

export default memo(App);
