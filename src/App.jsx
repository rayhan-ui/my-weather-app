import { useState } from "react";
function App() {
  const [city, setCity] = useState("");
  const [show, setShow] = useState("");

  const apiKey = "21d05e3cecd6bd8e063df91c480a006a";
  const weather = () =>
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setShow(data);
        setCity("");
      });

  return (
    <div>
      <h2>Weather App</h2>
      <input
        type="text"
        placeholder="city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={weather}>search</button>

      {show && (
        <div>
          <h3>city:{show.name}</h3>
          <p>temp: {show.main?.temp}°C</p>
          <p>humidity: {show.main?.humidity}</p>
        </div>
      )}
    </div>
  );
}

export default App;
