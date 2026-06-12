import { Link } from 'react-router-dom';
import './NotFound.css';

export function NotFound() {
  return (
    <section className="not-found-page" aria-labelledby="not-found-title">
      <p className="eyebrow">Error 404</p>
      <h1 id="not-found-title">Esta ruta se ha apagado</h1>
      <p>No encontramos la pantalla que buscas. Puedes volver al inicio o entrar a la arena.</p>
      <div className="not-found-actions">
        <Link className="button button--primary" to="/">
          Volver al inicio
        </Link>
        <Link className="button button--secondary" to="/juego">
          Ir al juego
        </Link>
      </div>
    </section>
  );
}
