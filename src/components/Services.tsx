import { data, serviceDescriptions, serviceIcons } from "../sector-data";
import { useReveal } from "../hooks/useReveal";

export function Services() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const services = data.servicios;
  const pad = services.length < 10 ? "0" : "";

  return (
    <section className="band services" id="servicios">
      <div className="container">
        <header className={`band-head reveal${visible ? " in" : ""}`} ref={ref}>
          <p className="section-eyebrow">Qué hacemos</p>
          <h2 className="section-title">Servicios del estudio</h2>
        </header>
        <div className="cards">
          {services.map((service, i) => (
            <article
              key={service}
              className={`card reveal${visible ? " in" : ""}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span
                className="card-icon"
                dangerouslySetInnerHTML={{ __html: serviceIcons[i % serviceIcons.length] }}
              />
              <h3 className="card-title">{service}</h3>
              <p className="card-body">{serviceDescriptions[i % serviceDescriptions.length] ?? ""}</p>
              <span className="card-index">0{i + 1} / {pad}{services.length}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
