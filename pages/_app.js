//css cuả antd
import "antd/dist/antd.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Provider } from "mobx-react";
import UserStore from "./../stores/UserStore";
import { API } from "../constants";
//khai báo API để sử dụng graphql
//const client = new ApolloClient({ uri: "http://localhost:1337/graphql" });

const client = new ApolloClient({
  uri: API,
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  },
});
export default function MyApp({ Component, pageProps }) {
  return (
    <Provider UserStore={UserStore}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}
