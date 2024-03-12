import axios from "axios";
import React, { useEffect, useState } from "react";
import Wrong from "./Wrong";
import Home from "./Home";
import Used from "./Used";

function Key() {
  const [key, setKey] = useState("");
  const [state, setState] = useState("-1");

  // returned 0 = Wrong Key
  // returned 1 = Correct Key | Never Used | Register on LocalStorage
  // returned 2 = Correct Key | Once Used  | Fetch from LocalStorage | If LocalStorage has nothing then say Key
  //                                                                   is Already Used

  useEffect(() => {
    const  keyStored = localStorage.getItem('keyStoredInFirstLogin')
    if(keyStored) setKey(keyStored);
    const is = localStorage.getItem('predictionPlayerLoggedin');
    if (is) setState('2');
  }, []);

  const getData = (k) => {
    const apiURl = `https://prediction-1-z4n2.onrender.com/prediction/${k}`;
    axios.get(apiURl).then((res) => {
      if (res.data == 0) setState("0");
      else if (res.data == 1) setState("1");
      else setState("2");
    });
  };
  if (state == "-1")
    return (
      <div className="screen p-10 flex flex-col gap-10 bg-indigo-950 w-96 h-screen mx-auto items-center justify-center">
        <h1 className="text-center text-red-500 text-sm bg-indigo-900 p-2 rounded-md">
          <span className="font-bold">Note:</span> If you Login using this
          device, you will no longer be allowed to login from other device with
          the same key. Although you can buy another key to login with another
          device.
        </h1>
        <div className="flex flex-col w-full items-center justify-center gap-3">
          <input
            onChange={(e) => {
              setKey(e.target.value);
            }}
            className=" bg-transparent outline-none border border-white rounded px-2 py-1 w-56"
            placeholder="Enter you Key"
            type="text"
            name=""
            id="key"
          />
          <button
            className="bg-blue-600 p-2 rounded w-56"
            onClick={() => getData(key)}
          >
            Submit
          </button>
        </div>
      </div>
    );
  else if (state == "0") return <Wrong />;
  else if (state == "1") {
    localStorage.setItem(key, "true");
    localStorage.setItem('predictionPlayerLoggedin', "true");
    localStorage.setItem('keyStoredInFirstLogin', key);
    return <Home />;
  } else if (state == "2") {
    const approval = localStorage.getItem(key);
    if (approval == null) return <Used />;
    else{
      localStorage.setItem('predictionPlayerLoggedin', "true");
      localStorage.setItem('keyStoredInFirstLogin', key);
      return <Home />
    }
  }
}

export default Key;
