import './Game.css';

export function Game() {
  return (
    <section className="game-page" aria-labelledby="game-title">
      <div className="page-heading">
        <p className="eyebrow">Partida</p>
        <h1 id="game-title">Zona de juego</h1>
        <p>
          Prepara tus reflejos, observa las cartas y encuentra todas las parejas antes de que
          el pulso de la arena te gane terreno.
        </p>
      </div>

      <article className="placeholder-board" aria-label="Tablero en preparacion">
        {Array.from({ length: 8 }, (_, index) => (
          <button className="placeholder-card" type="button" key={index}>
            <span>?</span>
          </button>
        ))}
      </article>
    </section>
  );
}
