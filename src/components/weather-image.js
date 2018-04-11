import React from 'react';
import './weather-image.css';
import './weather-app.js';

function WeatherImage (props) {
  const sunny = <img className="cat-weather" src="https://i.ytimg.com/vi/JalVHgKqBXs/maxresdefault.jpg" alt="sunny-day"/>
  const rainy = <img className="cat-weather" src="http://www.n71.ru/files/120500/kot-pod-dozhdem.jpg" alt="rainy-day"/>
  const cloudy = <img className="cat-weather" src="https://img.memecdn.com/Cloud-Cat_o_100080.jpg" alt="cloudy-day"/>
  const snowy = <img className="cat-weather" src="http://cdn.mobsocmedia.com/uploads/sites/33/20170107001031/tumblr_nhdg6r3bpz1qfguoeo1_1280.jpg" alt="snowy-day"/>

if (props.forecast === 'Sunny') {
  return <div>{sunny} {props.name} will be a sunny day</div>
} if (props.forecast === 'Rainy') {
  return <div>{rainy} {props.name} will be a rainy day</div>
} if(props.forecast === 'Cloudy') {
  return <div>{cloudy} {props.name} will be a cloudy day</div>
} if(props.forecast === 'Snowy') {
  return <div>{snowy} on {props.name} will be snowing</div>
}
return
}

export default WeatherImage
