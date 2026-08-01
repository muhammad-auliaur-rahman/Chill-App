import { dataMelanjutkan } from "../Data/DataDummy.js";
import "../styles/MovieList.css";
import { useRef } from "react";

function LandScapeMovie() {
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
  return (
    <div className="bagian-film">
      <h1 className="judul-bagian">Melanjutkan Tonton FIlm</h1>
      <div className="container-slider">
        <button
          className="tombol-panah panah-kiri"
          onClick={() => scroll("kiri")}
        >
          <ion-icon name="arrow-back"></ion-icon>
        </button>
        <div className="pembungkus-rel rasio-4-kolom" ref={sliderRef}>
          {dataMelanjutkan.map((item) => {
            return (
              <div className="pembungkus-kartu-film card-4-kolom" key={item.id}>
                <div
                  className="kartu-film landScape"
                  style={{ backgroundImage: `url(${item.gambar})` }}
                >
                  {item.isEpisodeBaru && (
                    <div className="badge-label label-baru">Episode Baru</div>
                  )}
                  <div className="overlay-card"></div>
                  <div className="info-kartu">
                    <h3 className="judul-film">{item.judul}</h3>
                    <div className="rating-film">
                      <ion-icon name="star"></ion-icon>
                      <span>{item.rating}</span>
                    </div>
                  </div>
                  <div
                    className="progress-line-bottom"
                    style={{ width: `${item.progressValue || 0}%` }}
                  ></div>
                </div>
                {/* Kotak Modal Hover (Muncul Saat Di-hover) */}
                <div className="modal-hover">
                  {/* Banner Gambar di dalam modal */}
                  <div
                    className="modal-banner"
                    style={{ backgroundImage: `url(${item.gambar})` }}
                  ></div>

                  {/* Isi Body Modal */}
                  <div className="modal-body">
                    {/* Baris Tombol Aksi */}
                    <div className="modal-actions">
                      <div className="actions-left">
                        <button className="btn-aksi btn-play">
                          <ion-icon name="play"></ion-icon>
                        </button>
                        <button className="btn-aksi">
                          <ion-icon name="checkmark-outline"></ion-icon>
                        </button>
                      </div>
                      <button className="btn-aksi">
                        <ion-icon name="chevron-down-outline"></ion-icon>
                      </button>
                    </div>

                    {/* Judul Episode */}
                    <h4 className="modal-judul">
                      “{item.episode || "Episode 1"}”
                    </h4>

                    {/* Progress Bar & Durasi */}
                    <div
                      className="modal-progress-container"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <div
                        className="progress-bar-bg"
                        style={{
                          flexGrow: 1,
                          height: "4px",
                          backgroundColor: "#424649",
                          borderRadius: "2px",
                          overflow: "hidden",
                        }}
                      >
                        {/* Lebar bar biru mengikuti persentase dari item.progressValue */}
                        <div
                          className="progress-bar-fill"
                          style={{
                            width: `${item.progressValue || 0}%`,
                            height: "100%",
                            backgroundColor: "#0f1e93",
                          }}
                        ></div>
                      </div>
                      <span
                        className="modal-durasi"
                        style={{
                          fontSize: "13px",
                          color: "#b0b0b0",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.durasi || "0j 0m"}
                      </span>
                    </div>

                    {/* List Genre */}
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
            );
          })}
        </div>
        <button
          className="tombol-panah panah-kanan"
          onClick={() => scroll("kanan")}
        >
          <ion-icon name="arrow-forward"></ion-icon>
        </button>
      </div>
    </div>
  );
}

export default LandScapeMovie;
