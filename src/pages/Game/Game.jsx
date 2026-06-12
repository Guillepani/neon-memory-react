import { useCallback, useEffect, useMemo, useReducer } from 'react';
import { DifficultySelector } from '../../components/Game/DifficultySelector.jsx';
import { GameStats } from '../../components/Game/GameStats.jsx';
import { MemoryBoard } from '../../components/Game/MemoryBoard.jsx';
import { VictoryModal } from '../../components/Game/VictoryModal.jsx';
import { DIFFICULTIES } from '../../features/game/cardData.js';
import { createDeck } from '../../features/game/createDeck.js';
import {
  GAME_ACTIONS,
  GAME_STATUS,
  gameReducer,
  initialGameState,
} from '../../features/game/gameReducer.js';
import { useTimer } from '../../hooks/useTimer.js';
import './Game.css';

export function Game() {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);
  const { seconds, start, pause, reset } = useTimer();
  const isPlaying = state.status === GAME_STATUS.playing || state.status === GAME_STATUS.checking;
  const hasStarted = state.status !== GAME_STATUS.idle;
  const selectedDifficulty = DIFFICULTIES[state.difficulty];
  const totalPairs = selectedDifficulty.pairs;
  const matchedPairs = useMemo(
    () => state.matchedCardIds.length / 2,
    [state.matchedCardIds.length],
  );

  const handleSelectDifficulty = useCallback((difficulty) => {
    reset();
    dispatch({
      type: GAME_ACTIONS.selectDifficulty,
      payload: { difficulty },
    });
  }, [reset]);

  const handleStartGame = useCallback(() => {
    reset();
    dispatch({
      type: GAME_ACTIONS.startGame,
      payload: { cards: createDeck(state.difficulty) },
    });
  }, [reset, state.difficulty]);

  const handleResetGame = useCallback(() => {
    reset();
    dispatch({ type: GAME_ACTIONS.resetGame });
  }, [reset]);

  const handleChangeDifficulty = useCallback(() => {
    reset();
    dispatch({ type: GAME_ACTIONS.resetGame });
  }, [reset]);

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

  useEffect(() => {
    if (state.status === GAME_STATUS.playing || state.status === GAME_STATUS.checking) {
      start();
      return undefined;
    }

    pause();
    return undefined;
  }, [pause, start, state.status]);

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
            seconds={seconds}
          />
        </aside>

        <div className={`board-shell board-shell--${state.status}`}>
          <section className="game-state-banner" aria-live="polite">
            <span>{selectedDifficulty.label}</span>
            <strong>
              {state.status === GAME_STATUS.idle && 'Partida no iniciada'}
              {state.status === GAME_STATUS.playing && 'Partida en curso'}
              {state.status === GAME_STATUS.checking && 'Comprobando jugada'}
              {state.status === GAME_STATUS.won && 'Partida finalizada'}
            </strong>
          </section>

          <MemoryBoard
            cards={state.cards}
            flippedCardIds={state.flippedCardIds}
            matchedCardIds={state.matchedCardIds}
            isLocked={state.status !== GAME_STATUS.playing}
            onFlipCard={handleFlipCard}
          />

          {state.status === GAME_STATUS.won && (
            <VictoryModal
              difficulty={selectedDifficulty.label}
              moves={state.moves}
              seconds={seconds}
              onPlayAgain={handleStartGame}
              onChangeDifficulty={handleChangeDifficulty}
            />
          )}
        </div>
      </div>
    </section>
  );
}
