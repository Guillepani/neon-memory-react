import { memo } from 'react';

export const VictoryModal = memo(function VictoryModal({
  difficulty,
  moves,
  seconds,
  onPlayAgain,
  onChangeDifficulty,
}) {
  return (
    <section className="victory-overlay" aria-labelledby="victory-title" role="dialog" aria-modal="true">
      <div className="victory-modal">
        <p className="panel-label">Victoria</p>
        <h2 id="victory-title">Arena completada</h2>
        <p className="victory-copy">
          Has encontrado todas las parejas. La arena queda limpia y lista para otro intento.
        </p>

        <dl className="victory-summary" aria-label="Resumen final">
          <div>
            <dt>Movimientos</dt>
            <dd>{moves}</dd>
          </div>
          <div>
            <dt>Tiempo</dt>
            <dd>{seconds}s</dd>
          </div>
          <div>
            <dt>Dificultad</dt>
            <dd>{difficulty}</dd>
          </div>
        </dl>

        <div className="victory-actions">
          <button className="button button--primary" type="button" onClick={onPlayAgain}>
            Jugar otra vez
          </button>
          <button className="button button--secondary" type="button" onClick={onChangeDifficulty}>
            Cambiar dificultad
          </button>
        </div>
      </div>
    </section>
  );
});
