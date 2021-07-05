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
    const NovoEstado = {
      notas: novoArrayNotas
    }
    
    this.setState(NovoEstado)
  }

  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);

    this.setState({
      notas: arrayNotas
    })
  }

  render() {
    return (
      <section className="conteudo">
        {/* Passa uma propriedade para meu formulario, estou injetando uma dependencia(DI) no meu cadastro*/}
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas 
        apagarNota={this.deletarNota.bind(this)}
        notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
