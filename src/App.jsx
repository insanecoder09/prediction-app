import React, { useState } from "react";
import axios from "axios";
import Key from "./Key";
import { Route, Routes } from "react-router-dom";
import Wrong from "./Wrong";
import Home from "./Home";
import Used from "./Used";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Key/>} ></Route>
      <Route path="/home" element={<Home/>} ></Route>
      <Route path="/wrong" element={<Wrong/>} ></Route>
      <Route path="/used" element={<Used/>} ></Route>
    </Routes>
  );
}

export default App;
