import React,{useState,useRef} from 'react'
import Getweather from './Getweather';

import './index.css'


const api={
  key:"2d7cfa0903b8080721a188cbf223f65b",
  base:"https://api.openweathermap.org/data/2.5/"
}
function App() {
const valueTosend=null;

const [query,setQuery]=useState("");
const [weather,setWeather]=useState("");

const  search=evt=>{
  if (evt.key === "Enter") {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
       
        setQuery('');
        console.log(result);
      });
  }
}


  return (
    <main className='added'>
      <div className="search-box">
        <input 
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>
      <Getweather weatherValue={weather} />


    </main>
 
);
}

export default App
//usestate is to store l data men baad ma naamelonj fetching men l api