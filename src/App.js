import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeCategorias from './components/ListaDeCategorias'
import './assets/App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      notas: [],
      categorias: ["Games", "Música"],
    };
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...this.state.notas, novaNota]

    this.setState({
      notas: novoArrayNotas
    })
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);

    this.setState({
      notas: arrayNotas
    })
  }

  adicionarCategoria(nomeCategoria){    
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];

    this.setState({
      categorias: novoArrayCategorias
    })
  }
  

  render() {
    return (
      <section className="conteudo">

        {/* Passa uma propriedade para meu formulario, estou injetando uma dependencia(DI) no meu cadastro*/}
        <FormularioCadastro 
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)} 
        />

        <main className="conteudo-principal">

          <ListaDeCategorias 
            categorias={this.state.categorias} 
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            />

          <ListaDeNotas          
            apagarNota={this.deletarNota.bind(this)}
            notas={this.state.notas} 
          />

        </main>
      </section>
    );
  }
}

export default App;
