import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { AppProvider } from "./context/AppContext";

import Checkout from "./pages/Checkout";

import "./styles/main.scss";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Route exact path="/" component={Checkout} />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
