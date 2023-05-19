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
import SignUp from "./Components/Auth/Register/SignUp";

import "./App.scss";

function App() {
  const [registerBtn, setRegisterBtn] = useState(null);

  // Animacija sa druge strane applikacije
  const transitions = useTransition(registerBtn, {
    from: {
      opacity: 0,
      transform: registerBtn ? "translateX(100%)" : "translateX(-100%)",
    },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: {
      opacity: 0,
      transform: registerBtn ? "translateX(-100%)" : "translateX(100%)",
    },
  });

  console.log(registerBtn, "registerBtn");
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          {transitions((style, item) => (
            <animated.div style={style} className="Auth">
              <Routes>
                {registerBtn ? (
                  <Route
                    path="/"
                    element={<SignUp setRegisterBtn={setRegisterBtn} />}
                  />
                ) : (
                  <Route
                    path="/"
                    element={<Login setRegisterBtn={setRegisterBtn} />}
                  />
                )}
                <Route path="/" element={<Navigate to="/" />} />
              </Routes>
            </animated.div>
          ))}
        </Router>
      </div>
    </Provider>
  );
}

export default App;
