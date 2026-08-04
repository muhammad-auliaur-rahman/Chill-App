import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

import "../styles/Login.css"; // Menggunakan file CSS yang sama dengan login

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Kata sandi tidak sesuai!");
      return;
    }
    setErrorMessage("");
    console.log({ email, username, password });
    // Setelah berhasil daftar, bisa diarahkan ke halaman login atau beranda
    navigate("/Beranda");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Header & Logo */}
        <div className="login-header">
          <div className="logo-brand">
            <img src="/logo/Logo.png" alt="CHILL Logo" />
          </div>
          <h2>Daftar</h2>
          <p>Selamat datang!</p>
        </div>

        {/* Form Register */}
        <form onSubmit={handleRegister} className="login-form">
          {/* Input Username */}
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Masukkan username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          {/* Input Email (Tambahan baru) */}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Input Kata Sandi */}
          <div className="input-group">
            <label htmlFor="password">Kata Sandi</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Masukkan kata sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Tampilkan kata sandi"
              >
                <ion-icon
                  name={showPassword ? "eye-outline" : "eye-off-outline"}
                ></ion-icon>
              </button>
            </div>
          </div>

          {/* Input Konfirmasi Kata Sandi (Tambahan baru) */}
          <div className="input-group">
            <div className="label-error-wrapper">
              <label htmlFor="confirmPassword">Konfirmasi Kata Sandi</label>
              {errorMessage && (
                <span className="error-text">{errorMessage}</span>
              )}
            </div>{" "}
            <div className="password-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Masukkan ulang kata sandi"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label="Tampilkan konfirmasi kata sandi"
              >
                <ion-icon
                  name={showConfirmPassword ? "eye-outline" : "eye-off-outline"}
                ></ion-icon>
              </button>
            </div>
          </div>

          {/* Opsi Tautan: Punya akun? Masuk */}
          <div className="form-options">
            <span>
              Sudah punya akun? <NavLink to="/">Masuk</NavLink>
            </span>
          </div>

          {/* Tombol Aksi */}
          <div className="button-group-wrapper">
            <button type="submit" className="btn-masuk">
              Daftar
            </button>

            <div className="divider">
              <span>Atau</span>
            </div>

            <button
              type="button"
              className="btn-google"
              onClick={() => navigate("/Beranda")}
            >
              <svg
                className="google-icon"
                viewBox="0 0 24 24"
                width="18"
                height="18"
              >
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.19v3.15C3.17 21.3 7.23 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.19C.43 8.1 0 9.8 0 12s.43 3.9 1.19 5.42l4.09-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.23 0 3.17 2.7 1.19 6.58l4.09 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              Daftar dengan Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
