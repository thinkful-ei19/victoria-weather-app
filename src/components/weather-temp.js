import React from 'react';

function WeatherTemp(props) {
  return (
    <div>
      <div>Daytime Temperature {props.dayTemp}</div>
      <div>Nightime Temperature {props.nightTemp}</div>
    </div>
  )
}

export default WeatherTemp
