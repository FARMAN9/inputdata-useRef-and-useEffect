import React, { useEffect, useState } from "react";
import "./clock.css";

function Clock({ time, state }) {
  return (
    <>
      <div className="clock">{(time.toLocaleTimeString()}</div>
      <h1>{state}</h1>
    </>
  );
}

export default Clock;
