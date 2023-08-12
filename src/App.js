import React from "react";
import {  BrowserRouter, Route, Routes} from "react-router-dom";
import VendingMachine from "./components/VendingMachine";
import Chips from "./components/Chips";
import Soda from "./components/Soda";
import IceCream from "./components/iceCream";
import "./App.css";
  

function App()  {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VendingMachine/>} />
        <Route path="/chips" element={<Chips/>} />
        <Route path="/soda" element={<Soda/>} />
        <Route path="/iceCream" element={<IceCream/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
