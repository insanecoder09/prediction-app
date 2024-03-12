import React, { useState } from "react";
import Chart from "./Chart";

function Home() {
  const arr = [1, 2, 3, 4];
  const [text, setText] = useState("");
  const [period, setPeriod] = useState(null);
  return (
    <div className="screen p-10 flex flex-col gap-3 bg-indigo-950 w-96 h-screen mx-auto">
      <div className="flex flex-wrap gap-3 items-center justify-center w-full">
        {arr.map((e,i) => {
          return <div key={i} className="h-28 w-28 bg-indigo-900 rounded"></div>;
        })}
      </div>
      <div className="w-full py-3 flex flex-col items-center gap-4">
        {period ? (
          <div className="flex flex-col gap-6">
            <Chart period={period} />
          </div>
        ) : (
          <>
            <input
              className="w-60 py-1 px-2 outline-none bg-transparent border border-white rounded"
              type="text"
              placeholder="Enter period ID"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <button
              className="bg-blue-600 p-2 rounded w-60"
              onClick={() => {
                if (text) {
                  setPeriod(text);
                  setText("");
                }
              }}
            >
              Predict
            </button>
          </>
        )}

      </div>
    </div>
  );
}

export default Home;
