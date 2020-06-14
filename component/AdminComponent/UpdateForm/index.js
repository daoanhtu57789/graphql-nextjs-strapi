import { Form, Input, Button } from "antd";

export default function UpdateForm(props) {
  const layout = {
    labelCol: { span: 10 }, //khoảnh cách từ bên phải
    wrapperCol: { span: 4 }, //chiều dài
  };
  const tailLayout = {
    wrapperCol: { offset: 11, span: 16 },
  };

  const handleUpdate = function (values) {
    props.onUpdate(values);
  };
  const onFinish = function (values) {
    handleUpdate(values);
  };

  const onFinishFailed = function (errorInfo) {};

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      fields={[
        {
          name: ["title"],
          value: props.post.title,
        },
        {
          name: ["content"],
          value: props.post.content,
        },
      ]}
      onFinish={(values) => onFinish(values)}
      onFinishFailed={(errorInfo) => onFinishFailed(errorInfo)}
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
          Update
        </Button>
      </Form.Item>
    </Form>
  );
}
