import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Addproduct from "./components/Addproduct";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <section className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addproduct" element={<Addproduct />} />
          </Routes>
        </section>
      </Router>
    </>
  );
}

export default App;
