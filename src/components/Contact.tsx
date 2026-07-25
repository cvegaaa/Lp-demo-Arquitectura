import { useState, type FormEvent } from "react";
import { data } from "../sector-data";
import { useReveal } from "../hooks/useReveal";

export function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [note, setNote] = useState<{ text: string; kind: "ok" | "err" } | null>(null);

  const c = data.datos_contacto_placeholder;
  const waHref = `https://wa.me/${c.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hola, me gustaría cotizar un proyecto.")}`;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setNote({ text: "Completa nombre y email para continuar.", kind: "err" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setNote({ text: "Revisa el correo, parece incompleto.", kind: "err" });
      return;
    }
    setNote({ text: `Gracias, ${name}. Hemos recibido tu solicitud y te contactaremos pronto.`, kind: "ok" });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="band cta-final" id="contacto">
      <div className="container cta-inner">
        <div ref={ref} className={`cta-text reveal${visible ? " in" : ""}`}>
          <p className="section-eyebrow light">Hablemos de tu proyecto</p>
          <h2 className="section-title light">{data.cta_principal}</h2>
          <p className="cta-lead">
            Cuéntanos qué imaginas. Te respondemos con un alcance y una estimación, sin compromiso.
          </p>
          <ul className="contact-list">
            <li>
              <span className="contact-label">Teléfono</span>
              <a href={`tel:${c.telefono.replace(/[^0-9+]/g, "")}`}>{c.telefono}</a>
            </li>
            <li>
              <span className="contact-label">WhatsApp</span>
              <a href={waHref} target="_blank" rel="noopener noreferrer">{c.whatsapp}</a>
            </li>
            <li>
              <span className="contact-label">Email</span>
              <a href={`mailto:${c.email}`}>{c.email}</a>
            </li>
            <li>
              <span className="contact-label">Dirección</span>
              <span>{c.direccion}</span>
            </li>
            <li>
              <span className="contact-label">Horario</span>
              <span>{c.horario}</span>
            </li>
          </ul>
        </div>
        <form className={`cta-form reveal${visible ? " in" : ""}`} onSubmit={onSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tucorreo@ejemplo.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="message">Cuéntanos del proyecto</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tipo de proyecto, m², ubicación, plazo…"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">{data.cta_principal}</button>
          {note && (
            <p className={`form-note ${note.kind}`} role="status" aria-live="polite">
              {note.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
