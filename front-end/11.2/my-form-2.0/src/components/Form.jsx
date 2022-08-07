import React, { Component } from 'react';
import Nome from './Nome.jsx';
import Email from './Email.jsx';
import Cpf from './Cpf.jsx';
import Endereço from './Endereço.jsx';
import Cidade from './Cidade.jsx';
import Estado from './Estado.jsx';
import Submit from './Submit.jsx';
import Complemento from './Complemento.jsx';
import '../form.css';

class Form extends Component {
  constructor() {
    super()

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereço: '',
      cidade: '',
      estado: '',
      complemento: ''
    }
  }
  
  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }); 

    if(target.name === 'nome') {
      this.setState({
        [name]: value.toUpperCase()
      });
    }
  }
  handleVerify = (event) => {
    console.log(event);
  }

  render() { 
    return (
      <form>
        <fieldset>    
          <Nome value={this.state.nome} handleChange={this.handleChange}/>

          <Email value={this.state.email} handleChange={this.handleChange}/>

          <Cpf value={this.state.cpf} handleChange={this.handleChange} />

          <Endereço value={this.state.endereço} handleChange={this.handleChange} />

          <Cidade value={this.state.cidade} handleChange={this.handleChange} />

          <Estado value={this.state.estado} handleChange={this.handleChange} />

          <Complemento value={this.state.complemento} handleChange={this.handleChange} />

          <Submit />
        </fieldset>
      </form>
    );
  }
}
 
export default Form;