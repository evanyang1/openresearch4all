import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './Pages/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
