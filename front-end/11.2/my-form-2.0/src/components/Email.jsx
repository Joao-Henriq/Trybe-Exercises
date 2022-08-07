import React, { Component } from "react";

class Email extends Component {
  render() { 
    const { value, handleChange } = this.props

    return (
      <label>
        Insira seu Email abaixo.
        <input name="email" value={value} onChange={handleChange} type="email" maxLength={40} required/>
      </label>
    );
  }
}
 
export default Email;