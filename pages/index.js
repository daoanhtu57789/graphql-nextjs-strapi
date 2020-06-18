import Head from "next/head";
import Footer from "./../component/Footer/index";
import Header from "./../component/Header/index";
import BlogList from "./../component/Main/BlogList";
//graphQl
import { graphql } from "react-apollo";
//
import { QUERY_POSTS } from "./../constants/index";

export default graphql(QUERY_POSTS)(function Home({ data }) {
  let xhtml = <div style={{ textAlign: "center" }}>...Loading</div>;
  if (data.posts) {
    xhtml = <BlogList posts={data.posts.reverse()} />;
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
});
