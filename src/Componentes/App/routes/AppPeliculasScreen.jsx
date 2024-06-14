import { useState } from "react";
import "./style/peliculas.css";
const AppPeliculasScreen = () => {
  const [busqueda, setBusqueada] = useState("");
  const [peliculas, setPeliculas] = useState([]);

  const urlBase = "https://api.themoviedb.org/3/search/movie";
  const APi_KEY = "7b23ec2b2f50f1a15e6646a867740181";

  const handleInputChange = (e) => {
    setBusqueada(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPeliculas();
  };
  const fetchPeliculas = async () => {
    try {
      const response = await fetch(
        `${urlBase}?query=${busqueda}&api_key=${APi_KEY}`
      );
      const data = await response.json();
      setPeliculas(data.results);
    } catch (error) {
      console.error("ocurrio un error :", error);
    }
  };
  return (
    <>
      <div className="container">
        <h1>PELICULAS</h1>
        <form action="" className="row g-3" onSubmit={handleSubmit}>
          <div className="col-12 col-md-9">
            <input
              type="text"
              placeholder="busqueda"
              value={busqueda}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="col-12 col-md-3">
            <button
              className="btn btn-primary mb-3 w-100 w-md-auto"
              type="submit"
            >
              Buscar
            </button>
          </div>
        </form>
        <div className="movie-list">
          {peliculas.map((pelicula) => (
            <div key={pelicula.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                alt={pelicula.title}
              />
              <h2>{pelicula.title}</h2>
              <p>{pelicula.overview}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppPeliculasScreen;
