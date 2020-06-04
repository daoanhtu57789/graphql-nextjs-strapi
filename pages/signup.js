import React, { Component, Fragment } from "react";
import SignUpComponent from "./../component/SignupComponent/index";
import Head from "next/head";

class SignUp extends Component {
  render() {
    return (
      <div className="container">
        <Head>
          <title>Signup</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <SignUpComponent />
      </div>
    );
  }
}

export default SignUp;
