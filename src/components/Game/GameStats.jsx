import { memo } from 'react';
import { GAME_STATUS } from '../../features/game/gameReducer.js';

const STATUS_LABELS = {
  [GAME_STATUS.idle]: 'Lista para empezar',
  [GAME_STATUS.playing]: 'Partida activa',
  [GAME_STATUS.checking]: 'Comprobando pareja',
  [GAME_STATUS.won]: 'Arena completada',
};

export const GameStats = memo(function GameStats({ moves, status, matchedPairs, totalPairs }) {
  return (
    <section className="stats-panel" aria-label="Estadisticas de partida">
      <article className="stat-card">
        <span>Movimientos</span>
        <strong>{moves}</strong>
      </article>
      <article className="stat-card">
        <span>Parejas</span>
        <strong>
          {matchedPairs}/{totalPairs}
        </strong>
      </article>
      <article className="stat-card">
        <span>Estado</span>
        <strong>{STATUS_LABELS[status]}</strong>
      </article>
    </section>
  );
});
