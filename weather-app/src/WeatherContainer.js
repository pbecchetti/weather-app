import React from 'react';
import REACT_APP_weather_API from './.env';
import DayCard from './DayCard.js';
import TodayCard from './TodayCard.js';

class WeatherContainer extends React.Component {
  
   state = {
      fullData: [],
      dailyData: [],
      show: false
    }

    showModal = () => {
      this.setState({ show: true });
    }
    
    hideModal = () => {
      this.setState({ show: false });
    }

   formatDayCards = () => {
    console.log(process.env.REACT_APP_weather_API)
     console.log(this.state.dailyData)
      return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)
    }
    formatTodayCards = () => {
       return this.state.dailyData.map((reading, index) => <TodayCard reading={reading} key={index} />)
     }

    
   componentDidMount = () => {
      const url = 
      // `http://api.openweathermap.org/data/2.5/forecast?q=Honolulu&units=metric&lang=fr&APPID=${process.env.REACT_APP_weather_API}`
      'http://api.openweathermap.org/data/2.5/forecast?q=Honolulu&units=metric&lang=fr&APPID=8afed7f225e061e93a812511ee1c19f0'
  
      fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data.list)
        const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
        this.setState({
          fullData: data.list,
          dailyData: dailyData
        }, () => console.log(this.state))
      })
    }

    render() {
      return (
        <div className="container">
        <h1 className="display-1 jumbotron">Météo de la semaine.</h1>
        <h5 className="display-5 text-muted">Honolulu, HI</h5>
        <Modal show={this.state.show} handleClose={this.hideModal} >
        {this.formatTodayCards()[0]}
        </Modal>
          <div className="row justify-content-center" onClick={this.showModal} >
  
            {this.formatDayCards()}
  
          </div>
        </div>
    )
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button 
          onClick={handleClose}
        >
          Close
        </button>
      </section>
    </div>
  );
};

export default WeatherContainer;