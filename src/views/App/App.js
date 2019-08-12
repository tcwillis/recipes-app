import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../../routes";
import Header from "../../library/Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Switch>
    </div>
  );
}

export default App;
