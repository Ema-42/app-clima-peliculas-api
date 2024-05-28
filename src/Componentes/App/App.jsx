import NavBar from "./components/NavBar";

import { Navigate,Routes, Route } from "react-router-dom";
import HomeScreen from "./routes/HomeScreen";
import AboutScreen from "./routes/AboutScreen";
import ContactScreen from "./routes/ContactScreen";
const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="/about" element={<AboutScreen></AboutScreen>}></Route>
        <Route path="/contact" element={<ContactScreen></ContactScreen>}></Route>
        <Route path="/*" element={<Navigate to='/'/>}></Route>
      </Routes>
    </>
  );
};

export default App;
