import Footer from "../components/Footer.jsx";
import HeroSection from "../components/HeroSection";
import LandScapeMovie from "../components/LandScapeMovie";
import MovieSection from "../components/MovieSection.jsx";
import Navbar from "../components/Navbar";
import { TopRating, FilmTrending, BaruRilis } from "../Data/DataDummy.js";

import "../styles/Beranda.css";

function beranda() {
  return (
    <>
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
      <Footer />
    </>
  );
}

export default beranda;
