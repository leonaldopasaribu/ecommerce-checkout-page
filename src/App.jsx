import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Checkout from "./pages/Checkout";

import "./styles/main.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Checkout} />
      </div>
    </Router>
  );
}

export default App;
