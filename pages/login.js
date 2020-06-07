import React, { Component } from "react";
import Head from "next/head";
import LoginComponent from "../component/LoginComponent/index";
import Link from "next/link";
import { observer, inject } from "mobx-react";
//graphQl
import { graphql } from "react-apollo";
//
import { QUERY_AUTHOR } from "./../constants/index";
//
import Router from "next/router";
const Login = observer(
  class Login extends Component {
    handleLogin = (user) => {
      if (this.props.data) {
        const author = this.props.data.authors.filter(
          (author) =>
            author.email === user.email && author.password === user.password
        );
        this.props.UserStore.addUser(author[0]);
        if (author.length > 0) {
          Router.push(`/admin/[author]`, `/admin/${author[0].name}`, true);
        } else {
          alert("Không tồn tại hoặc sai tài khoản và mật khẩu");
        }
      }
    };
    render() {
      return (
        <div className="container">
          <Head>
            <title>Login</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <h1
            style={{
              textAlign: "center",
              padding: "8.5rem 0px 0px 0px ",
            }}
          >
            <Link href="/">
              <a>
                <strong>Blog World</strong>
              </a>
            </Link>
          </h1>
          <LoginComponent handleLogin={(user) => this.handleLogin(user)} />
        </div>
      );
    }
  }
);
export default graphql(QUERY_AUTHOR)(inject("UserStore")(Login));
