import React from 'react';
import '../SideBar/SideBar.css';

export default function SideBar(props) {
  return (
    // Side Bar
    <div className="sideBar">
      {/* header */}
      <h2>Weather Details</h2>
      {/* Weather Details */}
      <div className="WD">
        {/* Cloudy Detail */}
        <div className="details">
          <p>Cloudy</p>
          <h2>{props.cloudy}%</h2>
        </div>
        {/* Cloudy Detail End && Humidity Details Start */}
        <div className="details">
          <p>Humidity</p>
          <h2>{props.humidity}%</h2>
        </div>
        {/* Humidity Details End && Wind Details Start */}
        <div className="details">
          <p>Wind</p>
          <h2>{props.wind}m/s</h2>
        </div>
        {/* Wind details End */}
      </div>
      {/* Weather Details End */}
    </div>
  )
}
