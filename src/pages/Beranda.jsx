import HeroSection from "../components/HeroSection";
import LandScapeMovie from "../components/LandScapeMovie";
import MovieSection from "../components/MovieSection.jsx";
import Navbar from "../components/Navbar";
import { TopRating, FilmTrending, BaruRilis } from "../data/DataDummy.js";

import "../styles/Beranda.css";

function beranda() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <main>
        <LandScapeMovie />
        {/* Portrait Baris 1 */}
        <MovieSection
          judul="Top Rating Film dan Series Hari ini"
          dataFilm={TopRating}
        />

        {/* Portrait Baris 2 */}
        <MovieSection judul="Film Trending" dataFilm={FilmTrending} />

        {/* Portrait Baris 3 */}
        <MovieSection judul="Rilis Baru" dataFilm={BaruRilis} />
      </main>
    </div>
  );
}

export default beranda;
