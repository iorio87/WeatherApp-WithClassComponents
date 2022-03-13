import React, { Component } from "react";
import Card from "./Card";
import './Cards.css'

export default class Cards extends Component {

    render() {
        if(this.props.cities){
        return (
            <div className="cards">
                {this.props.cities.map(city => //arrow no lleva {} ??
                    <Card
                        key={city.id}
                        max= '30'
                        min= '31'
                        name={city.name}
                        img='02d' //a cambiar...
                        onClose='cerrando...'
                    />
                )}
            </div>
        )
        }else{
            return <p>No hay nada para mostrar</p>
        }
    }
}

