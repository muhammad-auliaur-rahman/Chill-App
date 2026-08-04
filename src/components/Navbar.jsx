import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { useState } from "react";
function Navbar() {
  const [isClick, setIsClick] = useState(false);
  const tampilkanMenu = () => {
    setIsClick(!isClick);
  };

  return (
    <header>
      <div className="nav-left">
        <div className="logo">
          <img src="/logo/movie-open.png" alt="movie" className="Movie-logo" />
          <img src="/logo/CHILL.png" alt="Chill-Logo" className="Chill-Logo" />
        </div>

        <NavLink to="/Series">Series</NavLink>
        <NavLink to="/Film">Film</NavLink>
        <NavLink to="/DaftarSaya">Daftar Saya</NavLink>
      </div>

      <div className="nav-right">
        <button onClick={tampilkanMenu}>
          <img src="/profil.png" alt="Profil" className="foto-profil" />
          <img src="/Vector.png" alt=">" className="Panah" />
        </button>
        <div className="Menu" style={isClick ? { opacity: "1" } : {}}>
          <NavLink to="/Profil">
            <span>
              <ion-icon name="person"></ion-icon>
            </span>
            Profil Saya
          </NavLink>
          <NavLink to="/Langganan">
            <span>
              <ion-icon name="star"></ion-icon>
            </span>
            Ubah Premium
          </NavLink>
          <NavLink to="/">
            <span>
              <ion-icon name="log-out-outline"></ion-icon>
            </span>
            Keluar
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
