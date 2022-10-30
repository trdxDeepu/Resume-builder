import React, { useEffect, useState } from "react";
import { Form, Input, Button,  message, Spin } from "antd";
import "../resources/register.css";
import { Link, useNavigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import axios from "axios";



function Register() {
 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post("api/user/register", values);
      setLoading(false);
     message.success("Register successful")
    } catch (error) {
      setLoading(false);
      message.error("Registration failed");
    }
  };

  
  useEffect(()=>{
    if(localStorage.getItem('Resume_build-user'))
    {
      navigate('/home')
    }
  })

  return (
    <div className="auth-parent">
       <h1 className="brand brand11" >Resume Builder</h1>
       {loading && <Spin size="large"/>}
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Register</h1>
        <hr />
        <Form.Item name="username" label="Username"
        rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password"
        rules={[{ required: true, message: 'Enter Your password !' }]}>
          <Input type="password" />
        </Form.Item>

        <Form.Item name="cpassword" label="Confirm Password"
        rules={[{ required: true, message: 'Please Confirm your password!' }]}>
          <Input type="password" />
        </Form.Item>
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/login">Click Here to Login</Link>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;