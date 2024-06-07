import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import { Navigate, Routes, Route } from "react-router-dom";
import HomeScreen from "./routes/HomeScreen";
import AboutScreen from "./routes/AboutScreen";
import ContactScreen from "./routes/ContactScreen";
import UsuarioProvider from "./context/UsuarioProvider";
import LoginScreen from "./routes/LoginScreen";
import AppClimaScreen from "./routes/AppClimaScreen";
const App = () => {
  return (
    <UsuarioProvider>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="/login" element={<LoginScreen></LoginScreen>}></Route>
        <Route path="/about" element={<AboutScreen></AboutScreen>}></Route>
        <Route
          path="/contact"
          element={<ContactScreen></ContactScreen>}
        ></Route>
        <Route
          path="/clima"
          element={<AppClimaScreen></AppClimaScreen>}
        ></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
      <Footer></Footer>
    </UsuarioProvider>
  );
};

export default App;
