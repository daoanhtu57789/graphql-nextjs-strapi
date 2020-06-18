import React, { Component } from "react";

import Head from "next/head";
import Footer from "./../component/Footer/index";
import Header from "./../component/Header/index";
import BlogList from "./../component/Main/BlogList";
//graphQl
import { graphql } from "react-apollo";
//
import { QUERY_POSTS } from "./../constants/index";
export default graphql(QUERY_POSTS)(
  class index extends Component {
    render() {
      let xhtml = <div style={{ textAlign: "center" }}>...Loading</div>;
      if (this.props.data.posts) {
        xhtml = <BlogList posts={this.props.data.posts.reverse()} />;
      }
      return (
        <div className="container">
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <header>
            <Header />
          </header>

          <main>{xhtml}</main>

          <footer>
            <div id="fb-root"></div>
            {
              (window.fbAsyncInit = (function () {
                FB.init({
                  xfbml: true,
                  version: "v7.0",
                });
              })(
                (function (d, s, id) {
                  var js,
                    fjs = d.getElementsByTagName(s)[0];
                  if (d.getElementById(id)) return;
                  js = d.createElement(s);
                  js.id = id;
                  js.src =
                    "https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js";
                  fjs.parentNode.insertBefore(js, fjs);
                })(document, "script", "facebook-jssdk")
              ))
            }
            <div
              class="fb-customerchat"
              attribution={setup_tool}
              page_id="103630644445022"
              logged_in_greeting="Chào Mừng bạn đã đến với trùm phim remix"
              logged_out_greeting="Chào Mừng bạn đã đến với trùm phim remix"
            ></div>
            <Footer />
          </footer>

          <style jsx global>{`
            html,
            body {
              padding: 0;
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
            }

            * {
              box-sizing: border-box;
            }
          `}</style>
        </div>
      );
    }
  }
);
