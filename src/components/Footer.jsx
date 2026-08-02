import { genreColumns } from "../Data/DataDummy.js";
import { bantuanLinks } from "../Data/DataDummy.js";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer-utama">
      <div className="kontainer-footer">
        <div className="footer-info">
          <div className="logo-footer">
            <img
              src="/logo/movie-open.png"
              alt="Movie Open Logo"
              className="movie-logo"
            />
            <img
              src="/logo/CHILL.png"
              alt="Chill Logo"
              className="chill-logo"
            />
          </div>
          <p className="copyright">&copy; 2023 Chill All Rights Reserved.</p>
        </div>

        <details className="akordion-footer" open>
          <summary>
            Genre <ion-icon name="chevron-forward-outline"></ion-icon>
          </summary>
          <div className="konten-akordion">
            <div className="kisi-link">
              {genreColumns.map((column, colIndex) => (
                <ul key={colIndex}>
                  {column.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href={item.href}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </details>

        <details className="akordion-footer" open>
          <summary>
            Bantuan <ion-icon name="chevron-forward-outline"></ion-icon>
          </summary>
          <div className="konten-akordion">
            <ul>
              {bantuanLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </footer>
  );
}

export default Footer;
