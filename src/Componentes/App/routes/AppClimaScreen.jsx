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
    const date = new Date(timestamp * 1000);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const handleCambioCiudad = (e) => {
    setDataClima(null);
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
        <h1>CLIMA 🌥️</h1>
        <form onSubmit={onSubmit} className="  row g-3">
          <div className="col-12 col-md-9">
            <input
              type="text"
              className="form-control"
              value={ciudad}
              onChange={handleCambioCiudad}
              placeholder="Pelicula"
            />
          </div>
          <div className="col-12 col-md-3">
            <button
              type="submit"
              className="btn btn-primary mb-3 w-100 w-md-auto"
            >
              Buscar
            </button>
          </div>
        </form>

        {dataClima && dataClima.cod === 200 && (
          <div className="clima-card">
            <p className="city">{dataClima.name}</p>

            <div className="conteiner-img-temp">
              <div className="conteiner-img">
                <img
                  src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`}
                  alt=""
                />
              </div>
              <div className="conteiner-temp">
                <p className="temp">
                  {parseInt(farenheitToCelcius(dataClima?.main?.temp))} °C{" "}
                </p>
                <p className="weather">{dataClima.weather[0].description}</p>
              </div>
            </div>

            <div className="minmaxContainer">
              <span className="minText">Max : </span>
              <span className="minTemp">
                {parseInt(farenheitToCelcius(dataClima.main.temp_min))} °C
              </span>
              <hr />
              <span className="maxText">Min : </span>
              <span className="maxTemp">
                {parseInt(farenheitToCelcius(dataClima.main.temp_max))} °C
              </span>
            </div>
            <div className="humedad-viento">
              <p>Humedad 💧 : {dataClima.main.humidity}%</p>
              <p>Viento 💨 : {dataClima.wind.speed} Km/h</p>
            </div>
          </div>
        )}
        {dataClima && dataClima.cod === "404" && (
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
