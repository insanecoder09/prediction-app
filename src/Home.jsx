import React, { useState } from "react";
import Chart from "./Chart";
import Color from "./Color";

function Home() {
  const [game, setGame] = useState(0);

  const change = (c) => {
    setGame(c);
  };
  return (
    <div className="screen relative p-10 flex flex-col justify-center gap-3 bg-indigo-950 w-96 h-screen mx-auto">
      {game == 0 ? (
        <>
          <div className="flex flex-wrap gap-3 items-center justify-center w-full">
            <div
              onClick={() => {
                setGame(1);
              }}
              className="h-28 w-28 bg-indigo-900 rounded flex items-center justify-center text-center"
            >
              Lucky Jet
            </div>
            <div
              onClick={() => {
                setGame(2);
              }}
              className="h-28 w-28 bg-indigo-900 rounded flex items-center justify-center text-center"
            >
              Color Prediction
            </div>
            <div className="h-28 w-28 bg-indigo-900 rounded flex items-center justify-center text-center">
              Comming Soon...
            </div>
            <div className="h-28 w-28 bg-indigo-900 rounded flex items-center justify-center text-center">
              Comming Soon...
            </div>
          </div>
        </>
      ) : null}
      <div className=" flex flex-col items-center gap-5">
        {game == 1 ? <Chart /> : null}
        {game == 2 ? <Color /> : null}
      </div>
    </div>
  );
}

export default Home;
