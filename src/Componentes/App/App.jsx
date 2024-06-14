import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Navigate, Routes, Route } from "react-router-dom";
import HomeScreen from "./routes/HomeScreen";
import AboutScreen from "./routes/AboutScreen";
import ContactScreen from "./routes/ContactScreen";
import UsuarioProvider from "./context/UsuarioProvider";
import LoginScreen from "./routes/LoginScreen";
import AppClimaScreen from "./routes/AppClimaScreen";
import AppPeliculasScreen from "./routes/AppPeliculasScreen";
import "./App.css"; // Importa el archivo CSS

const App = () => {
  return (
    <UsuarioProvider>
      <div className="app-container">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
            <Route path="/clima" element={<AppClimaScreen />} />
            <Route path="/peliculas" element={<AppPeliculasScreen />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </UsuarioProvider>
  );
};

export default App;
