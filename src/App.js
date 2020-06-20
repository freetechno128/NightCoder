import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Blog from './components/Blog';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
