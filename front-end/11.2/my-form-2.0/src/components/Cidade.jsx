import React, { Component } from 'react';

class Cidade extends Component {  
  render() {
    const { value, handleChange } = this.props  
    return (
      <label>
        Insira o nome da sua cidade abaixo.
        <input name="cidade" value={value} onChange={handleChange} type="text" required/>
      </label>
    );
  }
}
 
export default Cidade;