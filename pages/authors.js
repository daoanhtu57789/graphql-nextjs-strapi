import Head from "next/head";
import Footer from "./../component/Footer/index";
import Header from "./../component/Header/index";
import AuthorComponent from "./../component/AuthorsComponent/index";

import { createApolloFetch } from "apollo-fetch";
import { FETCH_AUTHORS, API } from "./../constants/index";

function Author({ props }) {
  let xhtml = <div style={{ textAlign: "center" }}>...Loading</div>;
  if (props.data.authors) {
    xhtml = props.data.authors.map((author, index) => {
      return <AuthorComponent key={index} author={author} />;
    });
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
}

Author.getInitialProps = async (ctx) => {
  const fetch = createApolloFetch({
    uri: API,
  });

  const res = await fetch({
    query: FETCH_AUTHORS,
  });
  return { props: res };
};
export default Author;
