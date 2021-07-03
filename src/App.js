import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import './assets/App.css'

class App extends Component {
  constructor() {
    super();
   
    this.state = {
      notas: []
    }
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota]
    
    this.setState({
      notas: novoArrayNotas
    })
  }

  render() {
    return (
      <section className="conteudo">
        {/* Passa uma propriedade para meu formulario, estou injetando uma dependencia(DI) no meu cadastro*/}
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
