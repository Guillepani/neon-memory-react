import { memo, useMemo } from 'react';
import { MemoryCard } from './MemoryCard.jsx';

export const MemoryBoard = memo(function MemoryBoard({
  cards,
  flippedCardIds,
  matchedCardIds,
  isLocked,
  onFlipCard,
}) {
  const flippedCardSet = useMemo(() => new Set(flippedCardIds), [flippedCardIds]);
  const matchedCardSet = useMemo(() => new Set(matchedCardIds), [matchedCardIds]);
  const boardClassName = isLocked ? 'memory-board memory-board--locked' : 'memory-board';

  if (cards.length === 0) {
    return (
      <section className="empty-board" aria-label="Arena sin partida">
        <p>Selecciona una dificultad y pulsa iniciar para encender la arena.</p>
      </section>
    );
  }

  return (
    <section
      className={boardClassName}
      aria-label="Tablero de cartas"
      aria-busy={isLocked}
      inert={isLocked ? true : undefined}
    >
      {cards.map((card) => (
        <MemoryCard
          card={card}
          isFlipped={flippedCardSet.has(card.id)}
          isMatched={matchedCardSet.has(card.id)}
          key={card.id}
          onFlip={onFlipCard}
        />
      ))}
    </section>
  );
});
