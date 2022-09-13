import React, { Component } from 'react';

class HowTo extends Component {
  render() {
    const { ship } = this.props.match.params; 
    return (
      <div>
        <p>Aqui veio as props {ship}</p>
      </div>
    );
  }
}

export default HowTo;
 