import ApolloClient from "apollo-boost";
import React, { FC } from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Countries from "./pages/Countries";
import CountryDetails from "./pages/CountryDetails";
import Homepage from "./pages/Homepage";
import { GlobalStyles } from "./styles/globals";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql"
});

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Router>
        <Route path="/" exact component={Homepage} />
        <Route path="/countries" exact component={Countries} />
        <Route path="/countries/:code" component={CountryDetails} />
      </Router>
    </ApolloProvider>
  );
};

export default App;
