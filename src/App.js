import React from 'react';
import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import About from './Components/About';
import Posts from './Components/Posts';
import NotFound from './Components/NotFound';
import PostsId from './Components/PostsId';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/posts/:id" component={PostsId} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
