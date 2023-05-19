import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useTransition, animated } from "react-spring";

import { Provider } from "react-redux";
import { store } from "./API/Redux/Store";

import Login from "./Components/Auth//Login/Login";
import Register from "./Components/Auth/Register/Register";

import "./App.scss";

function App() {
  const [registerBtn, setRegisterBtn] = useState(true);

  // Animacija sa druge strane applikacije
  // const transitions = useTransition(registerBtn, {
  //   from: {
  //     opacity: 0,
  //     transform: registerBtn ? "translateX(100%)" : "translateX(-100%)",
  //   },
  //   enter: { opacity: 1, transform: "translateX(0%)" },
  //   leave: {
  //     opacity: 0,
  //     transform: registerBtn ? "translateX(-100%)" : "translateX(100%)",
  //   },
  // });

  console.log(registerBtn, "registerBtn");

  const user = {
    userName: "aca",
    surName: "Conic",
    email: "acaconic99@gmail.com",
  };

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            {registerBtn === true ? (
              <Route
                path="/auth"
                element={<Register setRegisterBtn={setRegisterBtn} />}
              />
            ) : (
              <Route
                path="/auth"
                element={<Login setRegisterBtn={setRegisterBtn} />}
              />
            )}
            <Route path="/" element={<Navigate to="/auth" />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
