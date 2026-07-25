import { data } from "../sector-data";
import { useReveal } from "../hooks/useReveal";

export function Problem() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="band problem" id="proyecto">
      <div className="container problem-grid">
        <div ref={ref} className={`problem-text reveal${visible ? " in" : ""}`}>
          <p className="section-eyebrow">El punto de partida</p>
          <h2 className="section-title">
            Cotizar por WhatsApp no es un proyecto. <span className="accent">Diseñar con plano, sí.</span>
          </h2>
          <p className="section-lead">{data.problema_tipo}</p>
          <p className="section-body">
            Por eso trabajamos con un método de cuatro fases: entendemos tu necesidad, proponemos
            diseño, documentamos y acompañamos la obra. Menos ambigüedad, más control.
          </p>
        </div>
        <aside className={`problem-card reveal${visible ? " in" : ""}`} aria-label="Diferencia">
          <div className="problem-row">
            <span className="problem-tag problem-tag--off">Sin proceso</span>
            <ul>
              <li>Presupuesto a ojo, sin planos</li>
              <li>Plazos que se duplican</li>
              <li>Decisiones por mensaje suelto</li>
            </ul>
          </div>
          <div className="problem-divider" aria-hidden="true"></div>
          <div className="problem-row">
            <span className="problem-tag problem-tag--on">Con método</span>
            <ul>
              <li>Cotización por alcance y fase</li>
              <li>Cronograma entregado</li>
              <li>Documentación técnica clara</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
