import React, { Component, Fragment } from "react";
import SignUpComponent from "./../component/SignupComponent/index";
import Head from "next/head";
import Link from "next/link";
//graphQl
import { graphql } from "react-apollo";
//
import { createAuthor } from "./../constants/index";
//mobx
import { observer, inject } from "mobx-react";
//
import Router from "next/router";
const SignUp = observer(
  class SignUp extends Component {
    handleSignUp = (user) => {
      if (user.password === user.confirmPassword) {
        this.props.createAuthor({
          variables: {
            email: user.email,
            password: user.password,
            name: user.name,
            date: user.date,
            address: user.address,
            phone: +user.phone,
          },
        });
        alert("Đăng kí thành công.");
        Router.push(`/login`, `/login`, true);
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

export default graphql(createAuthor, { name: "createAuthor" })(
  inject("UserStore")(SignUp)
);
