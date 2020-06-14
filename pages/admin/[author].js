import Head from "next/head";
import Footer from "./../../component/Footer/index";
import { Row, Col, Button } from "antd";
import Link from "next/link";
import AdminComponent from "./../../component/AdminComponent/adminComponent";
//mobx
import { observer, inject } from "mobx-react";
import {
  deletePost,
  API,
  QUERY_AUTHOR,
  updatePost,
} from "./../../constants/index";
import { createApolloFetch } from "apollo-fetch";
import UpdateForm from "./../../component/AdminComponent/UpdateForm/index";
//graphQl
import { graphql } from "react-apollo";
import { useState } from "react";
const Admin = observer(function Admin(props) {
  const [onModelDelete, setOnModelDelete] = useState(false);
  const [onModelUpdate, setOnModelUpdate] = useState(false);
  const [idDelete, setIdDelete] = useState(0);
  const [postUpdate, setPostUpdate] = useState(null);
  let xhtml = <div style={{ textAlign: "center" }}>...Loading</div>;

  //update
  const onUpdate = function (values) {
    let today = new Date();
    let date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    const fetch = createApolloFetch({
      uri: API,
    });

    fetch({
      query: updatePost,
      variables: {
        id: +postUpdate.id,
        title: values.title,
        content: values.content,
        updateday: date,
      },
    }).then((res) => {
      props.UserStore.editPost({
        id: +postUpdate.id,
        title: values.title,
        content: values.content,
        updateday: date,
      });
      alert("Update thành công.");
      setOnModelUpdate(false);
    });
  };

  const handleUpdate = function (post) {
    setPostUpdate(post);
    setOnModelDelete(false);
    setOnModelUpdate(true);
  };

  let showModelDelete = (
    <div>
      <h2>Bạn có chắc muốn xóa?</h2>
      <Button onClick={() => Delete()} type="primary">
        Xóa
      </Button>
      <Button type="default" onClick={() => setOnModelDelete(false)}>
        Cancel
      </Button>
    </div>
  );
  if (props.UserStore.user.posts) {
    xhtml = (
      <AdminComponent
        handleDelete={(id) => handleDelete(id)}
        posts={props.UserStore.user.posts}
        handleUpdate={(post) => handleUpdate(post)}
      />
    );
  }
  //handle logout
  const handleLogout = function () {
    props.UserStore.addUser({});
  };

  //delete
  const Delete = function () {
    props
      .deletePost({
        variables: {
          id: +idDelete,
        },
      })
      .then((data) => {
        const fetch = createApolloFetch({
          uri: API,
        });
        fetch({
          query: QUERY_AUTHOR,
          variables: { id: +props.UserStore.user.id },
        }).then((res) => {
          props.UserStore.addUser(res.data.author);
          setOnModelDelete(false);
          setOnModelUpdate(false);
        });
      });
  };

  const handleDelete = function (id) {
    setIdDelete(+id);
    setOnModelDelete(true);
    setOnModelUpdate(false);
  };

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Row>
          <Col span={4}></Col>

          <Col span={15}>
            <h1>Blog World</h1>
          </Col>

          <Col span={2}></Col>
          <Col span={2}>
            <Button onClick={() => handleLogout()} type="primary">
              <Link href="/">
                <a>Logout</a>
              </Link>
            </Button>
          </Col>
          <Col span={1}></Col>
        </Row>
      </header>
      <main>
        {onModelDelete || onModelUpdate ? (
          onModelDelete ? (
            showModelDelete
          ) : (
            <UpdateForm
              post={postUpdate}
              onUpdate={(values) => onUpdate(values)}
            />
          )
        ) : (
          xhtml
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
});
export default graphql(deletePost, { name: "deletePost" })(
  inject("UserStore")(Admin)
);
