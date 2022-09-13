import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloWorld from "./Components/Pages/HelloWorld";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HelloWorld />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
