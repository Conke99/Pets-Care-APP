import React from "react";

import { Provider } from "react-redux";
import { store } from "./API/Redux/Store";
import { BrowserRouter as Router } from "react-router-dom";

import SecuredLayout from "./Components/Layout/SecuredLayout";

import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <SecuredLayout />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
