import { useEffect, useState } from "react";
import { data } from "../sector-data";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`} id="header">
      <div className="container header-inner">
        <a href="#hero" className="brand" aria-label="Inicio">
          <span className="brand-mark">
            <Logo size={28} />
          </span>
          <span className="brand-name">{data.nombre_generico}</span>
        </a>
        <nav className={`nav${open ? " open" : ""}`} aria-label="Navegación principal">
          <a href="#servicios" className="nav-link" onClick={close}>Servicios</a>
          <a href="#proceso" className="nav-link" onClick={close}>Proceso</a>
          <a href="#proyecto" className="nav-link" onClick={close}>El proyecto</a>
          <a href="#contacto" className="nav-link" onClick={close}>Contacto</a>
        </nav>
        <a href="#contacto" className="btn btn-ghost nav-cta">{data.cta_principal}</a>
        <button
          className={`nav-toggle${open ? " open" : ""}`}
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
