import React, { Component } from "react";
import Head from "next/head";
import LoginComponent from "../component/LoginComponent/index";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <Head>
          <title>Login</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <LoginComponent />
      </div>
    );
  }
}

export default Login;
