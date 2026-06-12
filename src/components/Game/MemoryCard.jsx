import { memo } from 'react';

export const MemoryCard = memo(function MemoryCard({ card, isFlipped, isMatched, onFlip }) {
  const isVisible = isFlipped || isMatched;

  return (
    <button
      className={`memory-card memory-card--${card.tone} ${isVisible ? 'memory-card--flipped' : ''}`}
      type="button"
      onClick={() => onFlip(card.id)}
      aria-label={
        isVisible
          ? `Carta descubierta ${card.label}`
          : 'Carta oculta. Girar carta'
      }
      aria-pressed={isVisible}
      disabled={isMatched}
    >
      <span className="memory-card__inner" aria-hidden="true">
        <span className="memory-card__face memory-card__face--back">
          <span className="memory-card__back-mark">NMA</span>
          <span className="memory-card__back-line" />
        </span>
        <span className="memory-card__face memory-card__face--front">
          <span className="memory-card__label">{card.label}</span>
        </span>
      </span>
    </button>
  );
});
