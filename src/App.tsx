import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-gradient-to-br from-blue-700 to-purple-500">
      <div className="flex">
        <div className="w-1/6">
          <img src={logo} alt="logo" />
        </div>
        <div className="w-5/6">
          <h2 className="p-4 font-bold">Pritam santra</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
