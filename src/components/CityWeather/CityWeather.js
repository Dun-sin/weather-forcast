import React from 'react';
import '../CityWeather/CityWeather.css'

export default function CityWeather(props) {
  const today = new Date();
  return (
    <div className="city">
      <div className="cityTemp">
        <p className="temp">{props.Temp}<sup className="superDeg">o</sup></p>
        <p className="cityName">{props.city}</p>
      </div>
      <p className="time">{today.toLocaleString() + ''}</p>
    </div>
  )
}
