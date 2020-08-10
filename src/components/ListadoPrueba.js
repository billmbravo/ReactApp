import React from 'react';
import ReactDom from 'react-dom';
import data from '../data/data.json';

class ListadoPrueba extends React.Component {
    state = {
        datos: [],
    };
    constructor(props){
        super(props);
        console.log('1. Constructor');
    };

    cargarDatos = async()=>{
        const response = await fetch(
            'http://testapi.beatlech.com/public/api/personas'
        );
        const data = await response.json();
        this.setState({
            datos:data,
        });
    };

    render(){
        return (
            console.log('2. Render'),
            <div>
                <div></div>
                <h1>Hola mundo</h1>
                <ul>
                    {this.state.datos.map((e) => {
                        return (
                            <li key={e.id}>
                                {e.id} - {e.nombre} {e.apellido} {e.anio_nacimiento}
                            </li>
                        );
                    })}
                </ul>            
            </div>
        );
    };

    componentDidMount(){
        console.log('3.DidMount');
        // this.setState({
        //     datos: data,
        // })
        this.cargarDatos();
    };
    
    componentDidUpdate(){
        console.log('4.DidUpdate');
    };

    componentWillUnmount(){
        console.log('5.WillUnmount');
    };

}

 export default ListadoPrueba;
