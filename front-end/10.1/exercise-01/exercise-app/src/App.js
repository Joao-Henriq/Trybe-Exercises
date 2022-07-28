import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  )
}

class App extends Component {
  render() {
    const arr = ['Estudar', 'Treinar', 'Comer', 'Dormir'];
 
    return (
      <main>
        {arr.map((tarefas, index) => {
          return (
            <section key={index}>
              {tarefas}:
            </section>
          );
        })}

        <Task />
      </main>
    )
  }
}

export default App;
