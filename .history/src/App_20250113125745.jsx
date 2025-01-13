import { useEffect, useState, memo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Clock from "./components/Clock";
import inputdata from "./components/inputdate";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 3000);

    // Cleanup interval on component unmount
    console.log(timer);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <i
      <hr />
      <Clock time={time} state={"Jammu and kashmir"} />
    </>
  );
}

export default memo(App);
