// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
// app/javascript/application.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Greeting} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));