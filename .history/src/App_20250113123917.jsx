import { useEffect, useState, memo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Clock from "./components/Clock";

function App() {
  const [time, setTime] = useState(new Date());
  const [, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 100);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Clock time={time} />
    </>
  );
}

export default memo(App);
