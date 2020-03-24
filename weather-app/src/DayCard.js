import React from 'react';
var moment = require('moment');

const DayCard = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

  return (
    <div className="col-sm-2">
      <div className="card">
        <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
        <p className="text-muted">{moment(newDate).format('MMMM Do')}</p>
        
        <h2>{Math.round(reading.main.temp)} °C</h2>
        <img src ={`http://openweathermap.org/img/w/${reading.weather[0].icon}.png`} alt="wthr img" />
        <div className="card-body">
          <p className="card-text">{reading.weather[0].description}</p>
        </div>
      </div>
    </div>
  )
}

export default DayCard;