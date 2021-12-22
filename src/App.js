import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Checkout from "./pages/Checkout";

import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
