import React, { Component } from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import HowTo from './components/pages/HowTo';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() { 
    return (
      <BrowserRouter>
        <Route path="/about" component={About}/>
        <Route path="/howTo/:ship" render={(props) => <HowTo {...props} name="Vai começar os props"/>}/>
        <Route path="/" component={Home} />

      </BrowserRouter>
    );
  }
}
 
export default App;