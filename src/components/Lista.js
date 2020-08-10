import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ElementoLista from './ElementoLista';

class Lista extends React.Component {
    render(){
        return (
            <ul className="list-group">
              <ElementoLista texto = "Bill Bravo" tipo = "dark"/>
            </ul>
        );
    }
}

export default Lista;