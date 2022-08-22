import React from "react";
import { FaCopyright } from "react-icons/fa";
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";

import './App.css';
import Pages from "./components/pages";
import Info from "./components/info";


function App() {
  return (
    <div className="App">
       <Router>
         <Routes>
           <Route path="/" element={<Pages />}></Route>
           <Route path="/info" element={<Info />}></Route>
         </Routes>
         <p><FaCopyright />Copyright 2022 All Right Reserved By Digital Growthify</p>
       </Router>
    </div>
  );
}

export default App;
