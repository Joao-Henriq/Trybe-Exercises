import React, { Component } from "react";
import EstadoFavorito from "./EstadoFavorito";
import Email from "./Email";

class Form extends Component {
  
  constructor() {
    super()

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: ''
    }
  }
  
    handleChange = ({ target }) => {
      const { name } = target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
    
      this.setState({
        [name]: value,
      });
    }

  render() {
    return (
      <div>
        <h1>My form</h1>
        <form className="form">
          
          <EstadoFavorito value={this.state.estadoFavorito} handleChange={this.handleChange} />
          <label htmlFor="">
            What's your name?
            <input  name="nome" type="text" value={this.state.nome} onChange={this.handleChange} />
          </label>

          <label htmlFor="">
            How old are you?
            <input  name="idade" type="number" value={this.state.idade} onChange={this.handleChange} />
          </label>

          <Email value={this.state.email} handleChange={this.handleChange}  />

          <select name="palavraChaveFavorita" value={this.state.palavraChaveFavorita}  onChange={this.handleChange}>
            <option value="chave">chave</option>
            <option value="disco">disco</option>
            <option value="platina">platina</option>
          </select>

          <label>
            Você é mineiro, quer aprender react native e vai comparecer a aula ? 
            <input type="checkbox" name="vaiComparecer" value={this.state.vaiComparecer} onChange={this.handleChange} />
          </label>

          <label>
            Coloque uma foto sua
            <input type="file" />
          </label>
        </form>
      </div>
    ) 
  }
}

export default Form;