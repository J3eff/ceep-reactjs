import React, { Component } from 'react'
import './estilo.css'

class FormularioCadastro extends Component {

    render() {
        return (
            <form className="form-cadastro">
                <input 
                className="form-cadastro_input" 
                type="text" 
                placeholder="Titulo" 
                />
                <textarea 
                rows="15"
                className="form-cadastro_input"
                 placeholder="Escreva sua nota.." 
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