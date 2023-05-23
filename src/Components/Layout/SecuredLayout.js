import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";

import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import MainLayout from "./MainLayout";

const SecuredLayout = () => {
  const [registerBtn, setRegisterBtn] = useState(false);

  const navigate = useNavigate();
  const { user } = useSelector((state) => ({
    user: state.authReducer.user,
  }));

  useEffect(() => {
    if (user !== null) {
      navigate("/pets-care");
    }
  }, [user]);

  return (
    <Routes>
      {user !== null ? ( // Check if user exists
        <Route path="/pets-care" element={<MainLayout />} /> // Render MainLayout if user exists
      ) : (
        <>
          <Route
            path="/auth"
            element={
              registerBtn ? (
                <Register setRegisterBtn={setRegisterBtn} />
              ) : (
                <Login setRegisterBtn={setRegisterBtn} />
              )
            }
          />
          <Route path="/" element={<Navigate to="/auth" />} />
        </>
      )}
    </Routes>
  );
};

export default SecuredLayout;
