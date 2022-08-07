import React, { Component } from "react";

class Nome extends Component {
  
  
  

  render() { 
    const { value, handleChange } = this.props
    return (
      <label>
        Insira seu nome abaixo.
        <input name="nome" value={value} onChange={handleChange} type="text" maxLength={40} required/>
      </label>
    );
  }
}
 
export default Nome;