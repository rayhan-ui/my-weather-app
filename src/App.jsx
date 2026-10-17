import { useState } from "react";
import './styles.css'
function App() {
  const [city, setCity] = useState("");
  const [show, setShow] = useState(null);
  const [error, setError]=  useState("")

  const apiKey = "21d05e3cecd6bd8e063df91c480a006a";
  const getWeather = (e) =>{
    e.preventDefault()
  if(!city.trim()) return
  
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (Number(data.cod) !== 200) {
          setError("City not found");
          setShow(null); 
          return;
        }
        setError("");
        setShow(data);
        setCity("");
      })
      .catch((err)=>console.error("error fetching data:", err))
  }

  return (
    <form onSubmit={getWeather}>
      <h2>Weather App</h2>
      <input
        type="text"
        placeholder="ex: new york"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">search</button>
      {error && <p className="error">{error}</p>}
      {show && (
        <div>
          <h3>city: {show.name}</h3>
          <p>temp: {show.main?.temp}°C</p>
          <p>humidity: {show.main?.humidity}</p>
          <p>
            Sunrise: {show.sys?.sunrise 
              ? new Date(show.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
              : 'N/A'}
          </p>
          <p>
            Sunset: {show.sys?.sunset 
              ? new Date(show.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
              : 'N/A'}
          </p>
          <p>country: {show.sys?.country}</p>
        </div>
      )}
    </form>
  );
}

export default App;
