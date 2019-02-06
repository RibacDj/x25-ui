import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './views/Home/Home';
import About from './views/About/About';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </Switch>
    );
  }
}

export default App;
