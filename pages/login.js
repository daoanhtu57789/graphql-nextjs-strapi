import React, { Component } from "react";
import Head from "next/head";
import LoginComponent from "../component/LoginComponent/index";
import Link from "next/link";
import { observer, inject } from "mobx-react";
//graphQl
import { createApolloFetch } from "apollo-fetch";
//
import Router from "next/router";
const Login = observer(
  class Login extends Component {
    handleLogin = (user) => {
      const fetch = createApolloFetch({
        uri: "https://demo-strapi-nextjs.herokuapp.com/graphql",
      });

      fetch({
        query: `{
          authors {
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
      }).then((res) => {
        if (res.data.authors) {
          const author = res.data.authors.filter(
            (author) =>
              author.email === user.email && author.password === user.password
          );

          if (author.length > 0) {
            this.props.UserStore.addUser(author[0]);
            Router.push(`/admin/[author]`, `/admin/${author[0].name}`, true);
          } else {
            alert("Không tồn tại hoặc sai tài khoản và mật khẩu");
          }
        }
      });
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
export default inject("UserStore")(Login);

// export async function getStaticProps() {
//   // Get external data from the file system, API, DB, etc.
//   const fetch = createApolloFetch({
//     uri: "https://demo-strapi-nextjs.herokuapp.com/graphql",
//   });

//   fetch({
//     query: `{
//       authors {
//         id
//         email
//         name
//         password
//         date
//         phone
//         address
//         posts{
//           id
//           title
//           email
//           content
//           createday
//           updateday
//           authors{
//             id
//             email
//             name
//             password
//             date
//             phone
//             address
//           }
//         }
//       }
//     }`,
//   }).then((res) => {
//     if (res.data.authors) {
//       // const author = res.data.authors.filter(
//       //   (author) =>
//       //     author.email === user.email && author.password === user.password
//       // );
//       console.log(res.data.authors);
//       // if (author.length > 0) {
//       //   this.props.UserStore.addUser(author[0]);
//       // } else {
//       //   alert("Không tồn tại hoặc sai tài khoản và mật khẩu");
//       // }
//     }
//   });

//   // The value of the `props` key will be
//   //  passed to the `Home` component
//   return {
//     props: {
//       author,
//     },
//   };
// }
