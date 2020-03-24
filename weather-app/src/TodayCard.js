import React from 'react';
var moment = require('moment');

const DayCard = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

  return (
    <div className="col">
      <div className="card">
        <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
        <p className="text-muted">{moment(newDate).format('MMMM Do')}</p>
        <p className="text-muted">{moment(newDate).format('hh:mm')}</p>
        
        <h2>{Math.round(reading.main.temp)} °C</h2>
        <img className="todayImg" src ={`http://openweathermap.org/img/w/${reading.weather[0].icon}.png`} alt="wthr img" />
        <div className="card-body">
          <p className="card-text">{reading.weather[0].description}</p>
        </div>

        <p className="text-muted">Température Min: {reading.main.temp_min}</p>
        <p className="text-muted">Température Max: {reading.main.temp_max}</p>
        <p className="text-muted">% humidité: {reading.main.humidity}</p>
      </div>
    </div>
  )
}

export default DayCard;