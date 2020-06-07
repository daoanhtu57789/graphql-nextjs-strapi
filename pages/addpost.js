import React, { Component, Fragment } from "react";
import AddPostComponent from "./../component/AddPostComponent/index";
import Head from "next/head";
import Link from "next/link";
//graphQl
import { graphql } from "react-apollo";
//
import { createPost } from "./../constants/index";
//mobx
import { observer, inject } from "mobx-react";
//
import Router from "next/router";
const AddPost = observer(
  class AddPost extends Component {
    handleAddPost = (post) => {
      let today = new Date();
      let date =
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();
      const { user } = this.props.UserStore;
      if (post) {
        this.props.createPost({
          variables: {
            email: user.email,
            content: post.content,
            createday: date,
            updateday: "",
            title: post.title,
            authors: +user.id,
          },
        });

        this.props.UserStore.addPost({
          email: user.email,
          content: post.content,
          createday: date,
          updateday: "",
          title: post.title,
          authors: [this.props.UserStore.user],
        });

        alert("Tạo thành công.");
        Router.push(`/admin/[author]`, `/admin/${user.name}`, true);
      } else {
        alert("Tạo Thất Bại.");
      }
    };
    render() {
      return (
        <div className="container">
          <Head>
            <title>Signup</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <h1
            style={{
              textAlign: "center",
              padding: "2.5rem 0px 0px 0px ",
            }}
          >
            <Link href="/">
              <a>
                <strong>Blog World</strong>
              </a>
            </Link>
          </h1>
          <AddPostComponent
            handleAddPost={(post) => this.handleAddPost(post)}
          />
        </div>
      );
    }
  }
);

export default graphql(createPost, { name: "createPost" })(
  inject("UserStore")(AddPost)
);
