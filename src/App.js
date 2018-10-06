import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App container">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
