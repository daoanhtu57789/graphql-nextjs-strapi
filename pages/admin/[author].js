import Head from "next/head";
import Footer from "./../../component/Footer/index";
import { Row, Col, Button } from "antd";
import Link from "next/link";
import AdminComponent from "./../../component/AdminComponent/adminComponent";
//mobx
import { observer, inject } from "mobx-react";
//
import { deletePost } from "./../../constants/index";
import { createApolloFetch } from "apollo-fetch";

//graphQl
import { graphql } from "react-apollo";
import { useState } from "react";
const Admin = observer(function Admin(props) {
  const [showModel, setShowModel] = useState(false);
  const [idDelete, setIdDelete] = useState(0);
  let xhtml = <div style={{ textAlign: "center" }}>...Loading</div>;
  let showModelDelete = (
    <div>
      <h2>Bạn có chắc muốn xóa?</h2>
      <Button onClick={() => Delete()} type="primary">
        Xóa
      </Button>
      <Button type="default">Cancel</Button>
    </div>
  );
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

  const Delete = function () {
    props
      .deletePost({
        variables: {
          id: +idDelete,
        },
      })
      .then((data) => {
        const fetch = createApolloFetch({
          uri: "https://demo-strapi-nextjs.herokuapp.com/graphql",
        });
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
          variables: { id: +props.UserStore.user.id },
        }).then((res) => {
          props.UserStore.addUser(res.data.author);
          xhtml = (
            <AdminComponent
              handleDelete={(id) => handleDelete(id)}
              posts={res.data.author.posts}
            />
          );
          setShowModel(false);
        });
      });
  };

  const handleDelete = function (id) {
    setIdDelete(+id);
    setShowModel(true);
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
      <main>{showModel ? showModelDelete : xhtml}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
});
export default graphql(deletePost, { name: "deletePost" })(
  inject("UserStore")(Admin)
);
