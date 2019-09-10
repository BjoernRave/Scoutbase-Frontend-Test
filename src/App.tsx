import React, { FC } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

const App: FC = () => {
  return (
    <Router>
      <Route to="/" exact component={Homepage}></Route>
    </Router>
  );
};

export default App;
