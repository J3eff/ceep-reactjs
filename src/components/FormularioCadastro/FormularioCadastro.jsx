import React, { Component } from 'react'
import './estilo.css'

class FormularioCadastro extends Component {
    constructor(props) {
        super(props);

        this.titulo = "";
        this.texto = "";
        this.categoria = "Sem categoria";

        this.state = {
            categorias: []
        }

        this._novaCategorias = this._novasCategorias.bind(this)
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novaCategorias);

    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this._novaCategorias)
    }

    _novasCategorias(categorias) {
        this.setState({ ...this.state, categorias })
    }

    _handlerMudancaTitulo(event) {
        event.stopPropagation();
        this.titulo = event.target.value;
    }

    _handlerMudancaTexto(event) {
        event.stopPropagation();
        this.texto = event.target.value;
    }

    _handlerMudancaCategoria(ev) {
        ev.stopPropagation();
        this.categoria = ev.target.value;
    }

    _criarNota(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.criarNota(this.titulo, this.texto, this.categoria);
        event.target[0].value = '';
        event.target[1].value = '';
    }

    render() {
        return (
            <form className="form-cadastro"
                onSubmit={this._criarNota.bind(this)}
            >
                <select
                    onChange={this._handlerMudancaCategoria.bind(this)}
                    className="form-cadastro_input">
                    <option value="" disabled selected>Sem categoria...</option>
                    {this.state.categorias.map((categoria, index) => {

                        return <option key={index}>{categoria}</option>
                    })}
                </select>
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