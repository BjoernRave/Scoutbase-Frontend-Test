import ApolloClient from "apollo-boost";
import React, { FC } from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Countries from "./pages/Countries";
import CountryDetails from "./pages/CountryDetails";
import Homepage from "./pages/Homepage";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql"
});

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route path="/" exact component={Homepage}></Route>
        <Route path="/countries" exact component={Countries}></Route>
        <Route path="/countries/:code" component={CountryDetails}></Route>
      </Router>
    </ApolloProvider>
  );
};

export default App;
