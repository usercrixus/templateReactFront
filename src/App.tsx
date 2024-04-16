import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloWorldProvider from "./Components/Pages/HelloProvider";
import ProviderExample from "./Components/Pages/ProviderExemple";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HelloWorldProvider />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
