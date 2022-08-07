import React, { Component } from 'react';

class Complemento extends Component {
  render() { 
    const { handleChange } = this.props

    
    return (
      <label className='input-radio'>
        Complemento (Tipo)
        <input value="casa" onChange={handleChange} type="radio" name="complemento"/>Casa
        <input value="apartamento" onChange={handleChange} type="radio" name="complemento"/>Apartamento
      </label>
    );
  }
}
 
export default Complemento;
