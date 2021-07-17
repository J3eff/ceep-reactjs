import React, { Component } from 'react';
import './estilo.css';


class ListaDeCategorias extends Component {
    constructor(){
        super();

        this.state = {
            categorias: []
        }        
    }

    
    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias.bind(this));
    }

    _novasCategorias(categorias){
        this.setState({...this.state, categorias})
    }

    _handlerEventoIput(ev) {
        if (ev.key === "Enter") {
            let valorCategoria = ev.target.value;
            this.props.adicionarCategoria(valorCategoria);
            ev.target.value = '';
        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.state.categorias.map((categoria, index) => {
                        return <li key={index} className="lista-categorias_item" >{categoria}</li>
                    })}

                </ul>
                <input
                    type="text"
                    className="lista-categorias_input"
                    placeholder="Adicionar categoria"
                    onKeyUp={this._handlerEventoIput.bind(this)}
                />
            </section>
        );
    }
}

export default ListaDeCategorias;