import { useEffect, useState, memo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(new date);

  useEffect(() => {});
  function submit() {
    setCount((count) => count + 1);
  }

  return (
    <>
      <h1>our timer is {count}</h1>
      <button onClick={submit}>Click me</button>
    </>
  );
}

export default memo(App);
