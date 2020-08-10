import React from 'react';
import ReactDom from 'react-dom';
import logo192 from '../images/logo192.png';
import 'bootstrap/dist/css/bootstrap.min.css';
class Card extends React.Component {
    render(){
        return (
            <div className="col mb-4">
                <div className="card">
                    <img src={logo192} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.CardTitle}</h5>
                        <p className="card-text">{this.props.Text}</p>
                    </div>
                </div>
            </div>    
        );
    }
}

export default Card;