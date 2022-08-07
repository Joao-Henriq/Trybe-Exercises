import React, { Component } from "react";

class Endereço extends Component {
  render() { 
    const { value, handleChange } = this.props

    return (
      <label>
        Insira seu Endereço abaixo.
        <input name="endereço" value={value} onChange={handleChange} type="text" maxLength={200} required/>
      </label>
    );
  }
}
 
export default Endereço;