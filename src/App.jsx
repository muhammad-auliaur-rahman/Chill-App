import Beranda from "./pages/Beranda";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Series from "./pages/Series";
import Film from "./pages/Film";
import DaftarSaya from "./pages/DaftarSaya";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Series" element={<Series />} />
        <Route path="/Film" element={<Film />} />
        <Route path="/DaftarSaya" element={<DaftarSaya />} />
      </Routes>
    </>
  );
}

export default App;
