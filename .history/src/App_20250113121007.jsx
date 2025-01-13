import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    console.log("DOM UPDAte");
  });

  return (
    <>
      <h1>our timer is {count}</h1>
    </>
  );
}

export default App;
