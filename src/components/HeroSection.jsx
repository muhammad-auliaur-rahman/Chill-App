import { useState } from "react";
import { DataHero } from "../Data/DataDummy.js";
import "../styles/Hero.css";

function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${DataHero[0].foto})` }}
    >
      <div className="overlay"></div>
      <div className="content">
        <div className="desk">
          <h1>{DataHero[0].judul}</h1>
          <p>{DataHero[0].deskripsi}</p>
        </div>
        <div className="btn-action">
          <div className="btn-left">
            <button type="button" className="btn-mulai">
              Mulai
            </button>
            <button type="button" className="btn-information">
              <img src="/information-outline.png" alt="outline" /> Selengkapnya
            </button>
            <div className="age-rating">18+</div>
          </div>
          <button
            className="mute"
            onClick={() => setIsMuted((prev) => !prev)}
            aria-label={isMuted ? "Mute" : "Unmute"}
          >
            <ion-icon name={isMuted ? "volume-mute" : "volume-high"}></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
