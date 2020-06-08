import React, { Component } from "react";
import AddPostComponent from "./../component/AddPostComponent/index";
import Head from "next/head";
import Link from "next/link";
//graphQl
import { graphql } from "react-apollo";
//
import { createPost } from "./../constants/index";
//graphQl
import { createApolloFetch } from "apollo-fetch";
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
        this.props
          .createPost({
            variables: {
              email: user.email,
              content: post.content,
              createday: date,
              updateday: "",
              title: post.title,
              authors: +user.id,
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
              variables: { id: +user.id },
            }).then((res) => {
              this.props.UserStore.addPost(
                res.data.author.posts[res.data.author.posts.length - 1]
              );
              alert("Tạo thành công.");
              Router.push(`/admin/[author]`, `/admin/${user.name}`, true);
            });
          });
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
