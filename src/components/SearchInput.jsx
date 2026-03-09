// import { Input } from "antd";
// import React, { useEffect } from "react";

// const SearchInput = () => {
//   let weatherData;
//   const weather = async () => {
//     const response = await fetch("../shared/data/weather.json");
//     weatherData = await response.json();
//   };
//   useEffect(() => {
//     weather();
//   }, []);
//   return (
//     <div>
//       <Input type="text" placeholder="Введите название города..." />
//     </div>
//   );
// };

// export default SearchInput;

import { useState, useEffect } from "react";
import weatherData from "../shared/data/weather.json";
import styles from "../weather.module.css";

function debounser() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!city) {
      setWeather(null);
      setError("");
      return;
    }

    const result = weatherData[city];

    if (result) {
      setWeather(result);
      setError("");
    } else {
      setWeather(null);
      setError("City not found");
    }
  }, [city]);

  return (
    <div className={styles.container}>
      <h2>Weather App</h2>

      <input
        className={styles.input}
        type="text"
        placeholder="Enter city"
        onChange={(event) => {
          if (event.target.tagName === "INPUT") {
            setCity(event.target.value);
          }
        }}
      />

      {error && <p className={styles.error}>{error}</p>}

      {weather && (
        <div className={styles.card}>
          <h3>{city}</h3>
          <div className={styles.icon}>{weather.icon}</div>
          <p>{weather.description}</p>
          <p>{weather.temp} °C</p>
        </div>
      )}
    </div>
  );
}

export default debounser;
