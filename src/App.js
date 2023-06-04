import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=06dddaec5b6cc50a3ddf0212b8adb297`

  
  

const searchLocation = (e) => {
  if(e.key === "Enter"){
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)

    })

    setLocation("")
  }
  

}
 

  return (
    <div className="app">
      <div className="search">

      <input 
       value={location}
       onChange={ (e) => setLocation(e.target.value)}
       placeholder="Enter Location"
       onKeyPress={searchLocation}
       />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ?  <h1>{Math.floor(data.main.temp - 272.15) }° C</h1> : null}
          
          </div>
          <div className="description">
           {data.weather ? <p>{data.weather[0].main}</p> : null} 
          </div>
        </div>
         {data.name !=undefined && 
         
          <div className="bottom">
            <div className="feels">
            {data.main ?  <p>{Math.floor(data.main.feels_like-272.15) }° C</p> : null}
               <p>Feels Like</p>
            </div>
            <div className="humidity">
            {data.main ?  <p>%{data.main.humidity}</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
            {data.wind?  <p>{data.wind.speed} MPH</p> : null}
              <p>Wind</p>
            </div>
          </div>
         }

        



      </div>
    </div>
  );
}

export default App;
