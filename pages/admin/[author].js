import Head from "next/head";
import Footer from "./../../component/Footer/index";
import { Row, Col, Button } from "antd";
import Link from "next/link";
import AdminComponent from "./../../component/AdminComponent/adminComponent";
//mobx
import { observer, inject } from "mobx-react";
//
import { deletePost } from "./../../constants/index";
//graphQl
import { graphql } from "react-apollo";
const Admin = observer(function Admin(props) {
  let xhtml = <div style={{ textAlign: "center" }}>...Loading</div>;
  if (props.UserStore.user.posts) {
    xhtml = (
      <AdminComponent
        handleDelete={(id) => handleDelete(id)}
        posts={props.UserStore.user.posts}
      />
    );
  }
  //handle logout
  const handleLogout = function () {
    props.UserStore.addUser({});
  };

  const handleDelete = function (id) {
    props.deletePost({
      variables: {
        id: +id,
      },
    });
    props.UserStore.deletePost(id);
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
      <main>{xhtml}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
});
export default graphql(deletePost, { name: "deletePost" })(
  inject("UserStore")(Admin)
);
