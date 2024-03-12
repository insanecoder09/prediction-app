import React, { useEffect, useState } from "react";

function Chart({ period }) {
  const [betValue, setBetValue] = useState((Math.random() * 3).toFixed(2));
  const [enable, setEnable] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setEnable(1);
    }, 10000);
  }, []);

  const nextBet = () => {
    setEnable(0);
    setBetValue((Math.random() * 3).toFixed(2));
    setTimeout(() => {
      setEnable(1);
    }, 10000);
  };
  return (
    <>
      <div className="bg-indigo-800 p-2 rounded w-60">
        <span className="font-bold">Period ID:</span> {period}
      </div>
      <div className="h-36 w-full flex items-center justify-center rounded border border-white">
        <h1 className="font-bold text-3xl">{betValue}</h1>
      </div>
      <button
        onClick={() => {
          if (enable) nextBet();
        }}
        className={`${enable?"bg-blue-600":"bg-blue-300 cursor-not-allowed"} p-2 rounded w-60`}
      >
        {enable? "Next Bet": "Please wait..."}
      </button>
    </>
  );
}

export default Chart;
