import React from 'react';
import { BrowserRouter as Router, Route, useParams } from 'react-router-dom';


import Home from '../Home';
import Projects from '../Projects';
import Events from '../Events';
import People from '../People';
import ProjectPage from '../Projects/ProjectPage';

import { projects } from '../Projects/ProjectsData.js';


const App = () => (
  <React.Fragment>
    <main>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/projects/:id" component={getProjectPage} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/people" component={People} />
      </Router>
    </main>
  </React.Fragment>
);

function getProjectPage() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  console.log('yo', id);
  const project = projects.filter(x => x.id === 1)[0];
  console.log(projects);
  console.log(project);

  return <ProjectPage project={project} />;
}

export default App;
