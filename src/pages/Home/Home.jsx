import { Link } from 'react-router-dom';
import './Home.css';

export function Home() {
  return (
    <section className="home-page" aria-labelledby="home-title">
      <div className="hero-content">
        <p className="eyebrow">Arena arcade de memoria</p>
        <h1 id="home-title">Neon Memory Arena</h1>
        <p className="hero-copy">
          Entrena tu memoria en una arena arcade con cartas luminosas, dificultad ajustable,
          contador de movimientos y temporizador.
        </p>

        <div className="hero-actions" aria-label="Acciones principales">
          <Link className="button button--primary" to="/juego">
            Jugar ahora
          </Link>
          <Link className="button button--secondary" to="/instrucciones">
            Ver instrucciones
          </Link>
        </div>
      </div>

      <article className="hero-panel" aria-label="Resumen del juego">
        <span className="panel-kicker">Arena activa</span>
        <div className="pulse-grid" aria-hidden="true">
          {Array.from({ length: 12 }, (_, index) => (
            <span key={index} />
          ))}
        </div>
        <p>Elige dificultad, descubre parejas y supera tu marca con la menor cantidad de movimientos.</p>
      </article>
    </section>
  );
}
