import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class About extends Component {
  render() { 
    return (
      <div>
        <p>Sou o about</p>
        <Link to='/'>Voltar para home</Link>
      </div>
    );
  }
}

export default About;
 
