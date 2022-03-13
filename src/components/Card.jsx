import React, { Component } from "react";
import './Card.css'

export default class Card extends Component {
    constructor(props) {
        super(props);     
        // Este enlace es necesario para hacer que `this` funcione en el callback
        
        //this.onClose = this.onClose.bind(this);
    }
    //Cuando se usan arrow functions no es necesario "bindear" el this
    onClose = () => alert(this.props.name)

    render() {
        return (
        <div className="card">
            <button className="boton" onClick={this.onClose}>X</button>
            <h3>{this.props.name}</h3>
            <div className="cuerpo">
            <p>Min:</p>
            <p>{this.props.min}°</p>
            </div>
            <div className="cuerpo">
            <p>Max:</p>
            <p>{this.props.max}°</p>
            </div>            
            
            <img src={`http://openweathermap.org/img/wn/${this.props.img}@2x.png`} alt="" width='80' height='80'/>

        </div>
        )
    }
}