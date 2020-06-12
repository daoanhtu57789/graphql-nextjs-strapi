import { Form, Input, Button } from "antd";
import { updatePost } from "./../../../constants/index";
//graphQl
import { graphql } from "react-apollo";
import { createApolloFetch } from "apollo-fetch";
//mobx
import { inject, observer } from "mobx-react";
export default graphql(updatePost, { name: "updatePost" })(
  inject("UserStore")(
    observer(function UpdateForm(props) {
      const layout = {
        labelCol: { span: 10 }, //khoảnh cách từ bên phải
        wrapperCol: { span: 4 }, //chiều dài
      };
      const tailLayout = {
        wrapperCol: { offset: 11, span: 16 },
      };

      const handleUpdate = function (values) {
        let today = new Date();
        let date =
          today.getDate() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getFullYear();
        try {
          props
            .updatePost({
              variables: {
                id: +props.post.id,
                title: values.title,
                content: values.content,
                updateday: date,
              },
            })
            .then((data) => {
              const fetch = createApolloFetch({
                uri: "https://demo-strapi-nextjs.herokuapp.com/graphql",
              });
              const { id } = props.UserStore.user;
              fetch({
                query: `query($id:ID!) {
                author(id:$id) {
                  id
                  email
                  name
                  password
                  date
                  phone
                  address
                  posts{
                    id
                    title
                    email
                    content
                    createday
                    updateday
                    authors{
                      id
                      email
                      name
                      password
                      date
                      phone
                      address
                    }
                  }
                }
              }`,
                variables: { id: +id },
              }).then((res) => {
                props.UserStore.addUser(res.data.author);
                alert("Update thành công.");
              });
            });
        } catch (error) {
          alert("Update Không Thành Công");
        }
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
    })
  )
);
