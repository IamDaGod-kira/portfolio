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
        <div className="w-4/6">
          <h2 className="p-4 font-bold desktop:p-12 desktop:text-3xl">
            Pritam santra
          </h2>
        </div>
        <div className="w-2/6 font-bold p-4 desktop:p-12 desktop:text-3xl">
          <a href="https://github.com/IamDaGod-kira/">Github</a>
        </div>
      </div>
    </div>
  );
}

export default App;
