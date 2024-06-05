import { useState } from "react";
import "./style/clima.css";

const WheatherApp = () => {
  const urlBase = "https://api.openweathermap.org/data/2.5/weather";
  const APi_KEY = "2023987c8d644a4a5499007f7371c845";

  const [ciudad, setCiudad] = useState("");
  const [dataClima, setDataClima] = useState(null);

  const farenheitToCelcius = (temperatura) => {
    return temperatura - 273.15;
  };
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convertir el timestamp a milisegundos
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const handleCambioCiudad = (e) => {
    setDataClima(null)
    setCiudad(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (ciudad.length > 0) {
      fetchClima();
    }
  };

  const fetchClima = async () => {
    try {
      const response = await fetch(`${urlBase}?q=${ciudad}&appid=${APi_KEY}`);
      const data = await response.json();
      setDataClima(data);
    } catch (error) {
      console.log("Ocurrio un error: ", error());
    }
  };
  return (
    <>
      <div className="container-clima">
        <h5>App de Clima</h5>
        <form onSubmit={onSubmit} className="form-clima">
          <input type="text" value={ciudad} onChange={handleCambioCiudad} />
          <button type="submit">Buscar</button>
        </form>

        {dataClima && dataClima.cod === 200 && (
          <div>
            <h2>{dataClima.name}</h2>
            <p>
              Temperatura :{" "}
              {parseInt(farenheitToCelcius(dataClima?.main?.temp))} °C{" "}
            </p>
            <p>Condicion Meteorologica: {dataClima.weather[0].description}</p>
            <p>
              Temperatura mínima:{" "}
              {parseInt(farenheitToCelcius(dataClima.main.temp_min))} °C
            </p>
            <p>
              Temperatura máxima:{" "}
              {parseInt(farenheitToCelcius(dataClima.main.temp_max))} °C
            </p>
            <p>Humedad: {dataClima.main.humidity}%</p>
            <p>Velocidad del viento: {dataClima.wind.speed} m/s</p>
            <p>Amanecer: {formatTime(dataClima.sys.sunrise)}</p>
            <p>Atardecer: {formatTime(dataClima.sys.sunset)}</p>
            <p>Estado: </p>
            <img
              src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`}
              alt=""
            />
          </div>
        )}
        {dataClima && dataClima.cod === '404' && (
          <div>
            <h2>'{ciudad}' Ciudad no encontrada</h2>
            <p>
              No pudimos encontrar información para la ciudad solicitada. Por
              favor, verifica el nombre e intenta nuevamente.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default WheatherApp;
