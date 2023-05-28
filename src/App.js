
function App() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=06dddaec5b6cc50a3ddf0212b8adb297
  `
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Istanbul</p>
          </div>
          <div className="temp">
           <h1>68</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
          <div className="bottom">
            <div className="feels">
               <p>65 F </p>

            </div>
            <div className="humidity">
              <p>20%</p>
            </div>
            <div className="wind">
              12 MPH
            </div>
            <div className=""></div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
