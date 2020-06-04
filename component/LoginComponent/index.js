import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";

class LoginComponent extends Component {
  changeLogin = () => {};
  onFinish = (values) => {};

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render() {
    const layout = {
      labelCol: { span: 10 }, //khoảnh cách từ bên phải
      wrapperCol: { span: 4 }, //chiều dài
    };
    const tailLayout = {
      wrapperCol: { offset: 11, span: 16 },
    };
    return (
      <div>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          style={{ margin: "150px 0" }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
        <div style={{ textAlign: "center", margin: "-150px 15px 0px 0px" }}>
          <small>
            You don't have an account ? sign up{" "}
            <Link href="/signup">
              <a>here</a>
            </Link>
          </small>
        </div>
      </div>
    );
  }
}
//);

export default LoginComponent;
