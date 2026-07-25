import { testimonials } from "../sector-data";
import { useReveal } from "../hooks/useReveal";

export function Testimonials() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="band social" id="social">
      <div className="container">
        <header className={`band-head reveal${visible ? " in" : ""}`} ref={ref}>
          <p className="section-eyebrow">Testimonios</p>
          <h2 className="section-title">Lo que dicen los clientes</h2>
          <p className="band-note">Testimonios de ejemplo — se reemplazan con reseñas reales del negocio.</p>
        </header>
        <div className="quotes">
          {testimonials.map((q) => (
            <blockquote key={q.who} className={`quote reveal${visible ? " in" : ""}`}>
              <p className="quote-text">{q.text}</p>
              <footer className="quote-author"><strong>{q.who}</strong> — {q.tag}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
