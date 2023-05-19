import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { loginAction } from "../../../API/Redux/Action/loginAction";

const Login = ({ setRegisterBtn }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onFinish = (values) => {
    let formdata = {
      Name: values.userName,
      Password: values.password,
    };
    dispatch(loginAction(formdata));
  };

  return (
    <div className="Login">
      <div className="Left_side_login">
        <div className="Left_side_contnet">
          <div className="logo_contnet">
            <img
              className="Logo"
              src="/Images/pets-care-logo.png"
              alt="Pets Care Logo"
            />
            <p>Pet's Care</p>
          </div>
          <div className="Login_wraper">
            <div className="Login_content">
              <div className="Login_title">
                <h1>Login to Your Account</h1>
                <p>Login using your social networks</p>
              </div>
              <div className="Social_networks">
                <div className="facebook">
                  {/* <img src="/Images/login/social/facebook.png" alt="faceBook" /> */}
                </div>
                <div className="Linkedin"></div>
                <div className="gmail"></div>
              </div>
              <div className="Divider_Content">
                <div className="Divider"></div>
                <p>OR</p>
                <div className="Divider"></div>
              </div>
              <div className="login_forms">
                <Form
                  name="login-form"
                  className="login_form"
                  onFinish={onFinish}
                >
                  <Form.Item name="userName" className="login_form_content">
                    <Input placeholder="User Name" className="login_input" />
                  </Form.Item>
                  <Form.Item name="password" className="login_form_content">
                    <Input.Password
                      placeholder="Password"
                      className="login_input"
                    />
                  </Form.Item>
                  <Button className="login_btn" htmlType="submit">
                    Sign In
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Right_side_login">
        <div className="Shield_shape"></div>
        <div className="Star_shape"></div>
        <div className="Cirlce_shape_three"></div>
        <div className="Cirlce_shape"></div>
        <div className="Cirlce_shape_two"></div>
        <div className="Right_side_content">
          <h2>New here?</h2>
          <h3>sign up and discover a great amount of new opportunities!</h3>
          <button
            onClick={() => {
              setRegisterBtn(true);
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
