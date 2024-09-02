import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const target = 100000;
  const duration = 3000; // 3 seconds
  const increment = target / (duration / 100);

  useEffect(() => {
    let currentCount = 0;
    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= target) {
        currentCount = target;
        clearInterval(interval);
      }
      setCount(Math.floor(currentCount));
    }, 100); // Updates every 100ms for smooth animation

    return () => clearInterval(interval);
  }, [increment]);

  return <span>{count.toLocaleString()}</span>;
};

export default Counter;
