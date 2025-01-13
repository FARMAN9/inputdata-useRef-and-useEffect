import React, { useEffect, useState } from "react";
import "./clock.css";

function Clock({ time }) {
  // Empty dependency array means this effect runs once on mount

  return <div className="clock">{time.toLocaleTimeString()}</div>;
}

export default Clock;
