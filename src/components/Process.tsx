import { useReveal } from "../hooks/useReveal";

const steps = [
  { num: "01", title: "Brief", body: "Escuchamos tu necesidad, presupuesto y plazos. Definimos juntos el alcance real del proyecto." },
  { num: "02", title: "Diseño", body: "Proponemos alternativas con planos, renders y materiales. Iteramos hasta cerrar la propuesta." },
  { num: "03", title: "Documentación", body: "Entregamos planos técnicos y memoria de materiales lista para construir sin ambigüedad." },
  { num: "04", title: "Obra", body: "Acompañamos la ejecución, visitamos obra y cuidamos que lo construido sea lo diseñado." }
];

export function Process() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="band process" id="proceso">
      <div className="container">
        <header className={`band-head reveal${visible ? " in" : ""}`} ref={ref}>
          <p className="section-eyebrow">Cómo trabajamos</p>
          <h2 className="section-title">Un proceso de cuatro fases</h2>
        </header>
        <ol className="process-list">
          {steps.map((s) => (
            <li key={s.num} className={`process-step reveal${visible ? " in" : ""}`}>
              <span className="step-num">{s.num}</span>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-body">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
