import React, { Component, Fragment } from "react";
import { Form, Input, Button } from "antd";

class AddPostComponent extends Component {
  onFinish = (values) => {
    this.props.handleAddPost(values);
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
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input your title!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Content"
            name="content"
            rules={[
              {
                required: true,
                message: "Please input your content!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Đăng
            </Button>
          </Form.Item>
        </Form>
      </Fragment>
    );
  }
}

export default AddPostComponent;
