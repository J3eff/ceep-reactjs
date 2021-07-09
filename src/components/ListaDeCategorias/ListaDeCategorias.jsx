import React, { Component } from 'react';
import './estilo.css';


class ListaDeCategorias extends Component {

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
                    {this.props.categorias.map((categoria, index) => {
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