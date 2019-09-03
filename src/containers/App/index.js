import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../Home';
import Projects from '../Projects';
import Events from '../Events';
import People from '../People';
import FloatCart from '../FloatCart';

const App = () => (
  <React.Fragment>
    <Router>
      <main>
        <Home />
      </main>
      <FloatCart />
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/people" component={People} />
    </Router>
  </React.Fragment>
);

export default App;
