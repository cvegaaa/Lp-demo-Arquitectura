import { data } from "../sector-data";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark">
            <Logo size={24} />
          </span>
          <span>{data.nombre_generico}</span>
        </div>
        <nav className="footer-nav" aria-label="Pie">
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Proceso</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <p className="footer-credit">
          Demo diseñada por <a href="https://www.vegora.com.co" target="_blank" rel="noopener noreferrer">Vegora</a>
        </p>
      </div>
    </footer>
  );
}
