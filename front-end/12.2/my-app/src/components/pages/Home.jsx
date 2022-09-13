import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  
  render() { 
    return (<div>
       <Link to='./About'>About</Link>
      <h1>Minha HomePage</h1>
      <p>Aqui é o componente home sendo renderizado no app</p>
    </div>);
  }
}
 
export default Home;