import React, { useEffect, useState } from "react";
import "./clock.css";

function Clock({}) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 100);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this effect runs once on mount

  return <div className="clock">{time.toLocaleTimeString()}</div>;
}

export default Clock;
