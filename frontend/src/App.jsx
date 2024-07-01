// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Header from "./Components/Header";
import Detailpage from "./Pages/Detailpage";


function App() {
  return (
    <BrowserRouter>
    
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/carddetail/:id" element={<Detailpage />} />
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;
