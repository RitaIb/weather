import React,{useState} from 'react'
import './index.css'

function Getweather(props){
  const weather=props.weatherValue;
    
  
    const dateBuilder=(d)=>{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];//will get us the day of the week 
    let date = d.getDate();//will get us a day ben 1-31
    let month = months[d.getMonth()];//month 0-11
    let year = d.getFullYear();//year
  
    return `${day} ${date} ${month} ${year}`
  }
 
    return(
        
        <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
          {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°c
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
          ) : ('')}
       
      </div>
    )
}

export default Getweather;