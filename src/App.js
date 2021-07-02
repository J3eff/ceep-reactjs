import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import './assets/App.css'

class App extends Component {

  criarNota(titulo, texto){
    console.log(`uma nova nota foi criada ` + titulo + ` ` + texto);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota}/> //Passa uma propriedade para meu formulario 
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
