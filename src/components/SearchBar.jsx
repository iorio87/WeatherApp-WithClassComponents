import React, { Component } from "react";


export default class SearchBar extends Component {
    state = {
        city: ''
    }

    //cambio el estado entrada a lo que se ingrese por teclado
    handleOnchange = (e) => {
        this.setState({city: e.target.value})
    }
    
    render() {
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                this.props.onSearch(this.state.city);
            }}>
                <input type="text" placeholder="Ciudad..." onChange={this.handleOnchange} />
                <input type="submit"/>
            </form>
        )
    }
}