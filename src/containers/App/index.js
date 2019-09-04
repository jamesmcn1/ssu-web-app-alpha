import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../Home';
import Projects from '../Projects';
import Events from '../Events';
import People from '../People';
import FloatCart from '../FloatCart';

const App = () => (
  <React.Fragment>
    <main>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/people" component={People} />
      </Router>
      <FloatCart />
    </main>
  </React.Fragment>
);

export default App;
