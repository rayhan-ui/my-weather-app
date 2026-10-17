# 🌤️ Weather App

A simple weather app built with **React**. Search any city and instantly see its current temperature, humidity, sunrise/sunset time, and country, powered by the OpenWeatherMap API.

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Shows temperature (°C), humidity, sunrise, sunset and country
- ⚠️ Friendly error message when the city is not found or the request fails
- 🎨 Clean glassmorphism UI, responsive on mobile
- ⌨️ Search with the Enter key or the button

## 🛠️ Tech Stack

- [React](https://react.dev/) (Hooks: `useState`)
- [OpenWeatherMap API](https://openweathermap.org/api)
- Plain CSS

## 📂 Project Structure

```
weather-app/
├── src/
│   ├── App.jsx
│   ├── styles.css
│   └── main.jsx
├── .env              # your API key (not committed)
├── .gitignore
├── package.json
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/weather-app.git
cd weather-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Get an API key

1. Create a free account at [openweathermap.org](https://openweathermap.org/api)
2. Copy your API key from the dashboard (new keys can take a little while to activate)

### 4. Add your API key

Create a `.env` file in the project root:

```env
VITE_WEATHER_KEY=your_api_key_here
```

Then read it in `App.jsx`:

```js
const apiKey = import.meta.env.VITE_WEATHER_KEY;
```

> ⚠️ Never commit your `.env` file. Make sure `.env` is listed in `.gitignore`.

### 5. Run the app

```bash
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## 🧠 How It Works

1. The user types a city name and submits the form.
2. The app sends a request to the OpenWeatherMap `weather` endpoint with `units=metric`.
3. If the response code is `200`, the data is stored in state and displayed.
4. Otherwise an error message is shown and the old result is cleared.

## 📚 What I Learned

- Controlled inputs and form handling in React
- Fetching data from an API and handling the response
- Managing multiple pieces of state (`city`, `show`, `error`)
- Conditional rendering (`&&`) and optional chaining (`?.`)
- Keeping secrets out of source code with environment variables

## 🔮 Future Improvements

- [ ] Loading indicator while fetching
- [ ] Weather icon and description (e.g. "clear sky")
- [ ] "Feels like", wind speed and pressure
- [ ] Toggle between °C and °F
- [ ] 5-day forecast
- [ ] Dark/Light theme using Context API
- [ ] Search by current location (Geolocation API)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Ray**
- GitHub: [@your-username](https://github.com/your-username)