import "../styles/MovieList.css";
import { useRef, useState, useEffect } from "react";

function MovieSection({ judul, dataFilm }) {
  // 1. Buat ref untuk menghubungkan ke pembungkus slider
  const sliderRef = useRef(null);

  // 2. Fungsi untuk menggeser slider ke kiri/kanan
  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      // Geser sejauh ukuran lebar slider itu sendiri (bisa disesuaikan angkapx-nya)
      const scrollAmount = clientWidth;

      sliderRef.current.scrollTo({
        left:
          direction === "kiri"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };
  const [isAtRight, setIsAtRight] = useState(false);

  // 3. Fungsi cek apakah scroll sudah mentok di kanan
  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      // Jika jarak scroll + lebar layar sudah sama dengan total lebar slider
      setIsAtRight(scrollLeft + clientWidth >= scrollWidth - 5);
    }
  };

  // 4. Pasang event listener saat user scroll slider
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      checkScroll(); // Cek sekali pas komponen pertama dipasang
      slider.addEventListener("scroll", checkScroll);
    }
    return () => {
      if (slider) slider.removeEventListener("scroll", checkScroll);
    };
  }, [dataFilm]);
  return (
    <div className="bagian-film">
      {/* Judul Section Dinamis */}
      <h2 className="judul-bagian">{judul}</h2>

      {/* Pembungkus slider dan tombol panah */}
      <div className="container-slider">
        {/* Tombol Panah Kiri */}
        <button
          className="tombol-panah panah-kiri"
          onClick={() => scroll("kiri")}
        >
          <ion-icon name="arrow-back"></ion-icon>
        </button>

        {/* Area Scroll Poster (5 Kolom Portrait) */}
        <div className="pembungkus-rel rasio-5-kolom" ref={sliderRef}>
          {dataFilm.map((item) => (
            <div className="pembungkus-kartu-film" key={item.id}>
              <div
                className="kartu-film portrait"
                style={{ backgroundImage: `url(${item.gambar})` }}
              >
                {/* Badge Top 10 (Jika true) */}
                {item.isTop10 && (
                  <div className="badge-label label-top10">
                    <span>Top</span>
                    <span>10</span>
                  </div>
                )}

                {/* Badge Episode Baru (Jika true) */}
                {item.isEpisodeBaru && (
                  <div className="badge-label label-baru">Episode Baru</div>
                )}
              </div>
              {/* ===== MODAL HOVER (BARU MUNCUL SAAT DI-HOVER) ===== */}
              <div className="modal-hover">
                {/* Banner Gambar Modal */}
                <div
                  className="modal-banner"
                  style={{ backgroundImage: `url(${item.gambar})` }}
                />

                {/* Isi Detail Modal */}
                <div className="modal-body">
                  {/* Deretan Tombol Play, Check, Dropdown */}
                  <div className="modal-actions">
                    <div className="actions-left">
                      <button className="btn-aksi btn-play">
                        <ion-icon name="play"></ion-icon>
                      </button>
                      <button className="btn-aksi btn-check">
                        <ion-icon name="checkmark"></ion-icon>
                      </button>
                    </div>
                    <button className="btn-aksi btn-more">
                      <ion-icon name="chevron-down"></ion-icon>
                    </button>
                  </div>

                  {/* Baris Judul & Rating */}
                  <div className="modal-title-row">
                    <h4 className="modal-judul">{item.judul}</h4>
                    <div className="modal-rating">
                      <ion-icon name="star"></ion-icon>
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  {/* Info Rating Umur & Jumlah Episode/Durasi */}
                  <div className="modal-info">
                    <span className="badge-age">
                      {item.ratingUmur || "13+"}
                    </span>
                    <span className="info-episodes">
                      {item.totalEpisode || "16 Episode"}
                    </span>
                  </div>

                  {/* Genrenya */}
                  <div className="modal-genres">
                    {item.genre &&
                      item.genre.map((genreItem, index) => (
                        <div key={index} style={{ display: "contents" }}>
                          <span>{genreItem}</span>
                          {index < item.genre.length - 1 && (
                            <span className="dot">•</span>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Panah Kanan */}
        {!isAtRight && (
          <button
            className="tombol-panah panah-kanan"
            onClick={() => scroll("kanan")}
          >
            <ion-icon name="arrow-forward"></ion-icon>
          </button>
        )}
      </div>
    </div>
  );
}
export default MovieSection;
