import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home/Home';
import Nav from './Nav/Nav';

const App = () => (
  <div>
    <BrowserRouter>
      <div className="container">
        <Nav />
        <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
