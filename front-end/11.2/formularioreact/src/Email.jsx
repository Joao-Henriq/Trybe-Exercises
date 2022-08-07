import React, { Component } from "react";

class Email extends Component {
  render() {

    const {value, handleChange} = this.props;
    let error = undefined;
    if(value.length > 20) error = 'Email grande da porra véi';
    return(
      <label>
            Email
            <input value={value} onChange={handleChange} name="email" type="email"/>
            <span>{error ? error : ''}</span>
      </label>
    );
  }
}

export default Email;
