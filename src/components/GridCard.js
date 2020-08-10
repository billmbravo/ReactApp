import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../components/Card';
import Formulario from '../components/Formulario';
import ListadoPrueba from './ListadoPrueba';


class GridCard extends React.Component {
    state = {
        nombre: null,
        apellido: null,
        anio_nacimiento: null,
    };
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    handleClick = async (e)=>{
        const requestOptions = {
            method: 'POST',
            headers : {'Content-Type': 'appliation/json'},
            body: JSON.stringify({
                nombre: this.state.nombre,
                apellido: this.state.apellido,
                anio_nacimiento: this.state.anio_nacimiento,
            }),
        };
        
        fetch('http://testapi.beatlech.com/public/api/personas', requestOptions)
        .then((res)=> res.json())
        .catch((error)=>console.error('Error:', error))
        .then((response)=>console.log('success:', response));
    };
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <ListadoPrueba/>
                    </div>
                    <div className='col-sm-6'>
                        <Formulario OnChange={this.handleChange} onClick={this.handleClick}/>
                    </div>
                </div>
            </div> 
        );
    }
}

export default GridCard;