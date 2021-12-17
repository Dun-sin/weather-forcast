import React, { useEffect, useState } from 'react'
import './Main.css';
import CityWeather from '../CityWeather/CityWeather';
import SideBar from '../SideBar/SideBar';

const Main = () => {
  const API_KEY = '6f97c0acb11e47092c84adc1a6a0938f';
  const [cityTemp, setCityTemp] = useState(0);
  const [search, setSearch] = useState('');
  const [city, setCity] = useState('Nigeria');
  const [cloudy, setCloudy] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        setCityTemp(data.main.temp);
        setWind(data.wind.speed);
        setCloudy(data.clouds.all);
        setHumidity(data.main.humidity);
      } catch (error) {
      }
    }
    getWeatherData()
  }, [city]);

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setCity(search);
    setSearch('');
  }

  return (
    <div className="main">
      <div className="main__weather">
        <div className="main__headerInput">
          <h3>Weather App</h3>
          <form className="form" onSubmit={getSearch}>
            <input type="text" value={search} onChange={updateSearch} autoFocus placeholder="Location to Search" />
            <button type="submit">Search</button>
          </form>
        </div>
        <CityWeather city={city} Temp={cityTemp} />
      </div>
      <SideBar wind={wind} humidity={humidity} cloudy={cloudy} />
    </div>
  )
}

export default Main
