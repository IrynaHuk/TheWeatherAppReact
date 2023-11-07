import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="serch-city">
        <form className="mt-4 mb-4">
          <div className="row">
            <div className="col-9">
              <input type="text" value="Type a city..." />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" />
            </div>
          </div>
        </form>
      </div>
      <div className="weather px-4">
        <div className="row">
          <div className="col-6">
            <h1>New York</h1>
            <p>
              {" "}
              <span className="icon"> 🌞 </span>
              <span className="temperature-number">19 </span>
              <a href="" className="units">
                °C |{" "}
              </a>
              <a href="" className="units">
                {" "}
                °F
              </a>
            </p>
          </div>
          <div className="col-6">
            <ul>
              <li>Last updated: Tuesday 10:00</li>
              <li>Cloudy</li>
              <li>Humidity: 80%</li>
              <li>Wind: 10 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
