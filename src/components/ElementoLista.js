import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class ElementoLista extends React.Component {
    render(){
        return (
            <li className={`list-group-item list-group-item-${this.props.tipo}`}>
            {this.props.texto}
            </li>
        );
    }
}

export default ElementoLista;