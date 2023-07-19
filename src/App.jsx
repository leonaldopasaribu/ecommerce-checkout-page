import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppProvider } from "./context/AppContext";
import Checkout from "./pages/checkout";

import "./styles/main.scss";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Checkout />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
