import React, { Component } from 'react'
import './estilo.css'

class FormularioCadastro extends Component {
    constructor(props) {
        super(props);

        this.titulo = "";
        this.texto = "";
    }

    _handlerMudancaTitulo(event) {
        event.stopPropagation();
        this.titulo = event.target.value;
    }

    _handlerMudancaTexto(event){
        event.stopPropagation();
        this.texto = event.target.value;

    }

    _criarNota(event){
        event.preventDefault();
        event.stopPropagation(); 
        this.props.criarNota(this.titulo, this.texto);
    }

    render() {
        return (
            <form className="form-cadastro" 
                onSubmit={this._criarNota.bind(this)}
            >
                <input
                    className="form-cadastro_input"
                    type="text"
                    placeholder="Titulo"
                    onChange={this._handlerMudancaTitulo.bind(this)}
                />
                <textarea
                    rows="15"
                    className="form-cadastro_input"
                    placeholder="Escreva sua nota.."
                    onChange={this._handlerMudancaTexto.bind(this)}
                />
                <button
                    className="form-cadastro_input form-cadastro_submit">
                    Criar nota
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;