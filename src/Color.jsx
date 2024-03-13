import React, { useEffect, useState } from "react";

function Color() {
  const [betValue, setBetValue] = useState(Math.floor(Math.random() * 2));
  const [enable, setEnable] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setEnable(1);
    }, 10000);
  }, []);

  const nextBet = () => {
    setEnable(0);
    setBetValue(Math.floor(Math.random() * 2));
    setTimeout(() => {
      setEnable(1);
    }, 10000);
  };
  return (
    <>
      <div className="h-36 w-full flex items-center justify-center rounded border border-white">
        <h1 className="font-bold text-3xl">
          {betValue ? (
            <div className="h-10 w-10 bg-blue-500 rounded-full"></div>
          ) : (
            <div className="h-10 w-10 bg-red-500 rounded-full"></div>
          )}
        </h1>
      </div>
      <button
        onClick={() => {
          if (enable) nextBet();
        }}
        className={`${
          enable ? "bg-blue-600" : "bg-blue-300 cursor-not-allowed"
        } p-2 rounded w-60`}
      >
        {enable ? "Next Bet" : "Please wait..."}
      </button>
    </>
  );
}

export default Color;
