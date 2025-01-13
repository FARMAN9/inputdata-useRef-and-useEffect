import { useEffect, useState, memo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Clock from "./components/Clock";

function App() {
  const [time, setTime] = useState(new Date());
  const [lost, setlost] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 3000);

    // Cleanup interval on component unmount
    con
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Clock time={time} />
      <h1>{lost.toLocaleTimeString()}</h1>
    </>
  );
}

export default memo(App);
