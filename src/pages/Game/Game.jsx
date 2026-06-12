import { useCallback, useEffect, useMemo, useReducer } from 'react';
import { DifficultySelector } from '../../components/Game/DifficultySelector.jsx';
import { GameStats } from '../../components/Game/GameStats.jsx';
import { MemoryBoard } from '../../components/Game/MemoryBoard.jsx';
import { DIFFICULTIES } from '../../features/game/cardData.js';
import { createDeck } from '../../features/game/createDeck.js';
import {
  GAME_ACTIONS,
  GAME_STATUS,
  gameReducer,
  initialGameState,
} from '../../features/game/gameReducer.js';
import './Game.css';

export function Game() {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);
  const isPlaying = state.status === GAME_STATUS.playing || state.status === GAME_STATUS.checking;
  const hasStarted = state.status !== GAME_STATUS.idle;
  const selectedDifficulty = DIFFICULTIES[state.difficulty];
  const totalPairs = selectedDifficulty.pairs;
  const matchedPairs = useMemo(
    () => state.matchedCardIds.length / 2,
    [state.matchedCardIds.length],
  );

  const handleSelectDifficulty = useCallback((difficulty) => {
    dispatch({
      type: GAME_ACTIONS.selectDifficulty,
      payload: { difficulty },
    });
  }, []);

  const handleStartGame = useCallback(() => {
    dispatch({
      type: GAME_ACTIONS.startGame,
      payload: { cards: createDeck(state.difficulty) },
    });
  }, [state.difficulty]);

  const handleResetGame = useCallback(() => {
    dispatch({ type: GAME_ACTIONS.resetGame });
  }, []);

  const handleFlipCard = useCallback((cardId) => {
    dispatch({
      type: GAME_ACTIONS.flipCard,
      payload: { cardId },
    });
  }, []);

  useEffect(() => {
    if (state.status !== GAME_STATUS.checking) {
      return undefined;
    }

    const checkTimeout = window.setTimeout(() => {
      dispatch({ type: GAME_ACTIONS.checkPair });
    }, 700);

    return () => window.clearTimeout(checkTimeout);
  }, [state.status, state.flippedCardIds]);

  return (
    <section className="game-page" aria-labelledby="game-title">
      <header className="game-hero">
        <div className="page-heading">
          <p className="eyebrow">Partida</p>
          <h1 id="game-title">Zona de juego</h1>
          <p>
            Prepara tus reflejos, observa las cartas y encuentra todas las parejas antes de que
            el pulso de la arena te gane terreno.
          </p>
        </div>

        <div className="game-actions" aria-label="Controles de partida">
          <button className="button button--primary" type="button" onClick={handleStartGame}>
            {hasStarted ? 'Nueva partida' : 'Iniciar partida'}
          </button>
          <button
            className="button button--secondary"
            type="button"
            onClick={handleResetGame}
            disabled={!hasStarted}
          >
            Reiniciar
          </button>
        </div>
      </header>

      <div className="game-layout">
        <aside className="game-sidebar" aria-label="Panel de partida">
          <DifficultySelector
            selectedDifficulty={state.difficulty}
            isPlaying={isPlaying}
            onSelectDifficulty={handleSelectDifficulty}
          />
          <GameStats
            moves={state.moves}
            status={state.status}
            matchedPairs={matchedPairs}
            totalPairs={totalPairs}
          />
        </aside>

        <div className="board-shell">
          {state.status === GAME_STATUS.won && (
            <section className="win-banner" role="status" aria-live="polite">
              <p className="panel-label">Victoria</p>
              <h2>Arena completada</h2>
              <p>Has encontrado todas las parejas en {state.moves} movimientos.</p>
            </section>
          )}

          <MemoryBoard
            cards={state.cards}
            flippedCardIds={state.flippedCardIds}
            matchedCardIds={state.matchedCardIds}
            onFlipCard={handleFlipCard}
          />
        </div>
      </div>
    </section>
  );
}
