import React from 'react';
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails/MovieDetails';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <p>Home</p>
        </Route>
        <Route exact path="/movie/:name">
          <p>MovieDetails</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
