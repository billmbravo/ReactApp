// Solo JAVASCRIPT
// let element = document.createElement("h1");
// element.innerText = 'Mi primera App react.js';

// const divContenedor = document.getElementById('root');
// divContenedor.appendChild(element);

import React from 'react';
import ReactDom from 'react-dom';
import Parrafo from "./components/Parrajo"; 
import Card from "./components/Card"; 
import Lista from "./components/Lista";
import GridCard from "./components/GridCard";
import Formulario from './components/Formulario';
import ListadoPrueba from './components/ListadoPrueba';

// const nombre = "Bill Bravo";
// const suma = (elemento1, elemento2)=> {
//   return elemento1+elemento2;
// };
// const titulo = (
// <div>
//     <h1>Mi primera App react.js</h1>
// <p>Esto es una prueba realizada por {nombre}</p>
// <p>La suma {suma(2,3)}</p>
// </div>
// );

// const titulo2 = React.createElement(
//   "h1",
//   {},
//   `Buen dato mi ${nombre} pero no recuerdo haberte preguntado`
// );
// const divContenedor = document.getElementById('root');
// ReactDom.render(<Card/>, divContenedor);

let root = document.getElementById('root');
ReactDom.render(<GridCard/>, root)