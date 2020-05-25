import Home from './pages/Home';
import AddVideo from './pages/AddVideo';
import AllVideos from './pages/AllVideos';
import React from 'react';
import Navbar from './components/Navbar';
import About from './pages/About';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/all' exact component={AllVideos} />
        <Route path='/add' exact component={AddVideo} />
        <Route path='/about' exact component={About} />
      </Switch>
    </Router>
  );
}

export default App;
