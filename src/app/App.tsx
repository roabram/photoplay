import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <p>Hehehe</p>
        </Route>
        <Route path="/">
          <p>Help</p>
        </Route>
        <Route path="/home">
          <p>Home</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
