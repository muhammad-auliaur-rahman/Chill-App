import { Link, useLocation } from "react-router-dom";

function NotFoundPage() {
  const location = useLocation();

  return (
    <div className="notfound-page">
      {/* Angka 404 besar */}
      <div className="notfound-code">404</div>

      <div className="notfound-title">Halaman Tidak Ditemukan</div>

      <div className="notfound-sub">
        Path{" "}
        <span
          style={{
            fontFamily: "DM Mono, monospace",
            fontSize: "13px",
            background: "#f0ede8",
            padding: "2px 8px",
            borderRadius: "4px",
            color: "#374151",
          }}
        >
          {location.pathname}
        </span>{" "}
        tidak ada atau sudah dipindah.
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Link to="/" className="btn-primary">
          ← Kembali ke Beranda
        </Link>
        <Link to="/blog" className="btn-outline">
          📝 Lihat Blog
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
