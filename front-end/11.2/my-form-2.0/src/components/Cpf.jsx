import React, { Component } from 'react';

class Cpf extends Component {
  
  
  render() { 
    const { value, handleChange } = this.props

    return (
      <label>
        Insira seu CPF abaixo.
        <input name="cpf" value={value} onChange={handleChange} type="text" maxLength={11} required/>
      </label>
    );
  }
}
 
export default Cpf;
