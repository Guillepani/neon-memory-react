import { memo, useCallback, useMemo } from 'react';

export const MemoryCard = memo(function MemoryCard({
  card,
  isFlipped,
  isMatched,
  onFlip,
}) {
  const isVisible = isFlipped || isMatched;
  const cardClassName = useMemo(
    () =>
      [
        'memory-card',
        `memory-card--${card.tone}`,
        isVisible ? 'memory-card--flipped' : '',
        isMatched ? 'memory-card--matched' : '',
      ]
        .filter(Boolean)
        .join(' '),
    [card.tone, isMatched, isVisible],
  );
  const ariaLabel = useMemo(
    () => (isVisible ? `Carta descubierta ${card.label}` : 'Carta oculta. Girar carta'),
    [card.label, isVisible],
  );
  const handleClick = useCallback(() => {
    onFlip(card.id);
  }, [card.id, onFlip]);

  return (
    <button
      className={cardClassName}
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel}
      aria-pressed={isVisible}
      disabled={isVisible}
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
