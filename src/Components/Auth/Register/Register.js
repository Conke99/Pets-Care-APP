import React from "react";
import { Button, Form, Input, Radio } from "antd";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { registerAction } from "../../../API/Redux/Action/registerAction";

const Register = ({ setRegisterBtn }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onFinish = (values) => {
    let formData = {
      name: values.name,
      surName: values.surname,
      email: values.email,
      password: values.password,
      type: values.type,
    };
    dispatch(registerAction(formData));
  };

  return (
    <div className="Register">
      <div className="Register_left">
        <div className="left_side_content">
          <div className="Shield_shape"></div>
          <div className="Star_shape"></div>
          <div className="Cirlce_shape_three"></div>
          <div className="Cirlce_shape"></div>
          <div className="Cirlce_shape_two"></div>
          <div className="Right_side_content"></div>
          <h2>One Of Us</h2>
          <h3>
            If you already have an account, just sign in. We've missed you!
          </h3>
          <button
            onClick={() => {
              setRegisterBtn(false);
            }}
          >
            Sign In
          </button>
        </div>
      </div>
      <div className="Register_Right">
        <div className="Register_wraper">
          <div className="Register_title">
            <h1>Create Free Account</h1>
            <p>Register using social networks</p>
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
          <div className="Register_forms">
            <Form name="Register" className="Register_form" onFinish={onFinish}>
              <div className="Register_form_wrap">
                <Form.Item className="Register_form_content" name="name">
                  <Input placeholder="Name" className="singup_input" />
                </Form.Item>
                <Form.Item className="Register_form_content" name="surname">
                  <Input placeholder="Surname" className="singup_input" />
                </Form.Item>
                <Form.Item className="Register_form_content" name="email">
                  <Input placeholder="Email" className="singup_input" />
                </Form.Item>
                <Form.Item className="Register_form_content" name="password">
                  <Input.Password
                    placeholder="Password"
                    className="singup_input"
                  />
                </Form.Item>
                <Form.Item className="Register_form_content" name="type">
                  <Radio.Group className="Register_form_type">
                    <Radio value="Working">I Need Work</Radio>
                    <Radio value="Hiring">I'm Hiring</Radio>
                  </Radio.Group>
                </Form.Item>
              </div>
              <Button className="Register_input" htmlType="submit">
                Sign Up
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
