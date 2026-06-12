import { memo, useCallback } from 'react';
import { DIFFICULTY_LIST } from '../../features/game/cardData.js';

export const DifficultySelector = memo(function DifficultySelector({
  selectedDifficulty,
  isPlaying,
  onSelectDifficulty,
}) {
  const handleDifficultyClick = useCallback((event) => {
    const difficulty = event.currentTarget.dataset.difficulty;

    if (difficulty) {
      onSelectDifficulty(difficulty);
    }
  }, [onSelectDifficulty]);

  return (
    <section className="game-panel" aria-labelledby="difficulty-title">
      <div>
        <p className="panel-label">Dificultad</p>
        <h2 id="difficulty-title">Elige tu arena</h2>
      </div>

      <div className="difficulty-list" role="list" aria-label="Opciones de dificultad">
        {DIFFICULTY_LIST.map((difficulty) => (
          <button
            className={
              difficulty.id === selectedDifficulty
                ? 'difficulty-button difficulty-button--active'
                : 'difficulty-button'
            }
            type="button"
            key={difficulty.id}
            onClick={handleDifficultyClick}
            data-difficulty={difficulty.id}
            aria-pressed={difficulty.id === selectedDifficulty}
            disabled={isPlaying}
          >
            <span>{difficulty.label}</span>
            <small>{difficulty.description}</small>
          </button>
        ))}
      </div>
    </section>
  );
});
