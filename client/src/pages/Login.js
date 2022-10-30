import React, { useEffect, useState } from "react";
import { Form, Input, Button, message, Spin } from "antd";
import { Link, useNavigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import "../resources/register.css";
import axios from "axios";
function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const onFinish = async (values) => {
    setLoading(true)
    try {
      const user = await axios.post("api/user/login", values);
      message.success("Login successfull");
      localStorage.setItem("Resume_build-user", JSON.stringify(user.data));
      setLoading(false)
      navigate('/home')
    } catch (error) {
      setLoading(false)
      message.error("Login failed");
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
       <h1 className="brand">Resume Builder</h1>
       {loading && <Spin size="large"/>}
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Login</h1>
        <hr />
        <Form.Item name="username" label="Username"
        rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password"
        rules={[{ required: true, message: 'Enter Your password !' }]}>
          <Input type="password" />
        </Form.Item>

       
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/register">Click Here to Register</Link>
          <Button type="primary" htmlType="submit">
          Login
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;