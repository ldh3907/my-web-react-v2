import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Page/Header";
import * as P from "../src/Page";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={["/", "/bigProject/:projectId"]}>
          <P.Hero />
          <P.Profile />
          <P.Values />
          <P.Projects />
          <P.Footer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
