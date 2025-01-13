import { useEffect, useState, memo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {}, 1000);
    console.log("DOM UPDATE");
  });

  return (
    <>
      <h1>our timer is {count}</h1>
      <button>Click me</button>
    </>
  );
}

export default memo(App);
