import React, { useEffect, useState } from "react";
import "./clock.css";

function Clock({ time, state }) {
  return (
    <>
      <div className="clock">{timetoLocaleTimeString()}</div>
      <h1>{state}</h1>
    </>
  );
}

export default Clock;
