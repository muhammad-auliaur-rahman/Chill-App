import Beranda from "./pages/Beranda";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/register";
import Series from "./pages/Series";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Series" element={<Series />} />
      </Routes>
    </>
  );
}

export default App;
