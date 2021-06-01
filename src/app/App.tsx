import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login, Register } from './components/Button/Button.stories';
import Cast from './pages/Cast/Cast';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Homescreen from './pages/Homescreen/Homescreen';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import TVShowDetails from './pages/TVShowDetails/TVShowDetails';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Homescreen />
        </Route>
        <Route exact path="/movie/:name">
          <MovieDetails />
        </Route>
        <Route exact path="/cast/:name">
          <Cast />
        </Route>
        <Route exact path="/forgotpassword">
          <ForgotPassword />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/show/:name">
          <TVShowDetails />
        </Route>
        <Route exact path="register">
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
