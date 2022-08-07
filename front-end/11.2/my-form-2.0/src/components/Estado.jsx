import React, { Component } from "react";
import estados from '../estados';

class Estado extends Component {
  render() { 
    const { value, handleChange } = this.props

    return (
      <label>
        Insira seu Estado abaixo.
        <select name="estado" value={value} onChange={handleChange} required>
          {estados.map((estado, index) => 
              <option value={estado} key={index}>{estado}</option>
            )}
        </select>
      </label>
    );
  }
}
 
export default Estado;