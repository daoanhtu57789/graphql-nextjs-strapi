import React, { Component, Fragment } from "react";
import SignUpComponent from "./../component/SignupComponent/index";
import Head from "next/head";
import Link from "next/link";
//graphQl
import { graphql } from "react-apollo";
//
import { createAuthor, QUERY_AUTHOR } from "./../constants/index";
import { compose } from "recompose";
//mobx
import { observer, inject } from "mobx-react";
//
import Router from "next/router";
const SignUp = observer(
  class SignUp extends Component {
    handleSignUp = (user) => {
      if (user.password === user.confirmPassword) {
        this.props
          .createAuthor({
            variables: {
              email: user.email,
              password: user.password,
              name: user.name,
              date: user.date,
              address: user.address,
              phone: +user.phone,
            },
          })
          .then((data) =>
            this.props.UserStore.addUser({
              email: user.email,
              password: user.password,
              name: user.name,
              date: user.date,
              address: user.address,
              phone: +user.phone,
              authors: [],
            })
          );
        alert("Đăng kí thành công.");
        setTimeout(() => {
          Router.push(`/login`, `/login`, true);
        }, 1000);
      } else {
        alert("Mật khẩu không khớp hoặc lỗi khác.");
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
          <SignUpComponent handleSignUp={(user) => this.handleSignUp(user)} />
        </div>
      );
    }
  }
);

export default compose(
  graphql(createAuthor, { name: "createAuthor" }),
  graphql(QUERY_AUTHOR)
)(inject("UserStore")(SignUp));
