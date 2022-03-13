import { Component, useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import SearchBar from './components/SearchBar';


class App extends Component {

  //Nueva forma para definir estado y variables en ES7 sin necesidad de constructor
  state = {
        cities: []
      }
  apiKey = '4ae2636d8dfbdc3044bede63951a019b'  

  /*Forma hasta ES6 de definir estado, dentro de un constructor */
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     cities: []
  //   }
  //   this.apiKey = '4ae2636d8dfbdc3044bede63951a019b'
  // }

  onSearch = (ciudad) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${this.apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          //seteo el estado para que cambie cada vez que agrego una ciudad
          this.setState(
            { cities: [...this.state.cities, ciudad] }
          );
        } else {
          alert("Ciudad no encontrada");
        }
      });


  }

  render() {
    return (
      <div className="App">
        <SearchBar
          onSearch={this.onSearch}
        />

        <Cards
          cities={this.state.cities}
        />

      </div>
    )
  }
}

export default App
