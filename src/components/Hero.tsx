import { useEffect, useRef, useState } from "react";
import { data } from "../sector-data";

export function Hero() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<number | null>(null);

  const images = data.hero_imagenes;
  const total = images.length;

  useEffect(() => {
    if (total <= 1) return;
    timerRef.current = window.setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 6000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [total]);

  const goTo = (i: number) => {
    setCurrent(i);
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 6000);
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-slides" aria-hidden="true">
        {images.map((src, i) => (
          <div
            key={i}
            className={`slide${i === current ? " active" : ""}`}
            style={{ backgroundImage: `url('${src}')` }}
          ></div>
        ))}
      </div>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <p className="eyebrow">Estudio de arquitectura</p>
        <h1 className="hero-title">{data.eslogan_sugerido}</h1>
        <p className="hero-sub">
          Diseñamos residencias, locales y reformas con un proceso claro — del primer boceto
          a la entrega de obra. Cotiza tu proyecto en minutos, no en semanas de ida y vuelta.
        </p>
        <div className="hero-actions">
          <a href="#contacto" className="btn btn-primary">{data.cta_principal}</a>
          <a href="#proyecto" className="btn btn-ghost-light">Ver enfoque</a>
        </div>
        <div className="hero-dots" role="tablist" aria-label="Imágenes del proyecto">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-label={`Imagen ${i + 1}`}
              className={i === current ? "active" : ""}
              onClick={() => goTo(i)}
            ></button>
          ))}
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <span className="scroll-line"></span>
      </div>
    </section>
  );
}
