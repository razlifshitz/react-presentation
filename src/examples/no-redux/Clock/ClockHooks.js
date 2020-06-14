import React, { useState, useEffect } from "react";

function ClockWithHooks() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setDate(new Date()), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default ClockWithHooks;
