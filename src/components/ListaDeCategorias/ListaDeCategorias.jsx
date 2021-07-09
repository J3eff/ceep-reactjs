import React, { Component } from 'react';
import './estilo.css';


class ListaDeCategorias extends Component {

    _handlerEventoIput(ev){
        if(ev.key === "Enter"){
            console.log("Adicionar categoria!")
        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    <li className="lista-categorias_item">Categorias</li>
                    <li className="lista-categorias_item">Categorias</li>
                    <li className="lista-categorias_item">Categorias</li>
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