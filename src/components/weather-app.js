import React, {Component} from 'react';
import './weather-app.css';

import SearchForm from './search-form';
import WeatherImage from './weather-image';
import WeatherTemp from './weather-temp';

import Data from '../data';

class WeatherApp extends Component {
  constructor(props) {
    super(props);

      this.state = {
        weather: Data[0]
      }
  }

  weatherRequest(searchTerm) {
    this.setState({
      weather: Data.find(day => {
          return day.name.includes(searchTerm.toLowerCase())
        })
    })
  }

  render (){
    
    const {weather} = this.state

    return (
      <div>
        <SearchForm onClick={searchTerm => this.weatherRequest(searchTerm)}/>
        <WeatherImage forecast={weather.forecast} name={weather.name}/>
        <WeatherTemp dayTemp={weather.dayTemp} nightTemp={weather.nightTemp}/>
      </div>
    );
  }
}

export default WeatherApp
