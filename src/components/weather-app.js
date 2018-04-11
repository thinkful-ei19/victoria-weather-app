import React, {Component} from 'react';
import './weather-app.css';

import SearchForm from './search-form';
import WeatherImage from './weather-image';
import WeatherTemp from './weather-temp';

class WeatherApp extends Component {
  constructor(props) {
    super(props);

      this.state = {
        weatherRequest: 'monday',
        days: [
          {
              name: 'monday',
              dayTemp: '25°C',
              nightTemp: '15°C',
              forecast: 'Cloudy'

          },
          {
              name: 'tuesday',
              dayTemp: '31°C',
              nightTemp:'19°C',
              forecast: 'Sunny'

          },
          {
              name: 'wednesday',
              dayTemp: '23°C',
              nightTemp: '15°C',
              forecast: 'Cloudy'

          },
          {
              name: 'thursday',
              dayTemp: '30°C',
              nightTemp: '17°C',
              forecast: 'Sunny'

          },
          {
              name: 'friday',
              dayTemp: '28°C',
              nightTemp: '16°C',
              forecast: 'Sunny'

          },
          {
              name: 'saturday',
              dayTemp: '25°C',
              nightTemp: '14°C',
              forecast: 'Rainy'

          },
          {
              name: 'sunday',
              dayTemp: '-2°C',
              nightTemp: '-10°C',
              forecast: 'Snowy'

          }
        ]
      }
  }

  weatherRequest(searchTerm) {
    this.setState({
      weatherRequest: searchTerm.toLowerCase()
    })
  }

  render (){

      const selected = this.state.days.find(day => {
          return day.name.includes(this.state.weatherRequest)
        });
console.log(selected.forecast)
    return (
      <div>
        <SearchForm day={this.state.days} onClick={searchTerm => this.weatherRequest(searchTerm)}/>
        <WeatherImage forecast={selected.forecast} name={selected.name}/>
        <WeatherTemp dayTemp={selected.dayTemp} nightTemp={selected.nightTemp}/>
      </div>
    );
  }
}

export default WeatherApp
