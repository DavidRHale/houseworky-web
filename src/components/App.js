import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home/Home';
import Nav from './Nav/Nav';
import SignUp from './SignUp/SignUp';

const App = () => (
  <div>
    <BrowserRouter>
      <div className="container">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
