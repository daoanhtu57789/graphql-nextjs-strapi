import React, { Component, Fragment } from "react";
import Link from "next/link";
import { Form, Input, Button } from "antd";

class SignUpComponent extends Component {
  changeSignup = () => {};
  onFinish = (values) => {
    this.props.handleSignUp(values);
  };

  onFinishFailed = (errorInfo) => {};
  render() {
    const layout = {
      labelCol: { span: 10 }, //khoảnh cách từ bên phải
      wrapperCol: { span: 4 }, //chiều dài
    };
    const tailLayout = {
      wrapperCol: { offset: 11, span: 16 },
    };
    return (
      <Fragment>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
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

          <Form.Item
            label="ConfirmPassword"
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Please input your confirm password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[
              {
                required: true,
                message: "Please input your date!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your phone!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: "Please input your address!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              SignUp
            </Button>
          </Form.Item>
        </Form>
        <div style={{ textAlign: "center", margin: "0px 15px 0px 0px" }}>
          <small>
            You have an account ? Login{" "}
            <Link href="/login">
              <a>here</a>
            </Link>
          </small>
        </div>
      </Fragment>
    );
  }
}

export default SignUpComponent;
