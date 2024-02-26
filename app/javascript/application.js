import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Greeting from './components/Greeting';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Greeting />} />
          {/* Add other routes here */}
        </Routes>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
