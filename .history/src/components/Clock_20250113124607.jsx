import React, { useEffect, useState } from "react";
//import "./clock.css";

function Clock({ time }) {
  return (
    <>
      <div className="clock">{time.toLocaleTimeString()}</div>
      <h1></h1>
    </>
  );
}

export default Clock;
