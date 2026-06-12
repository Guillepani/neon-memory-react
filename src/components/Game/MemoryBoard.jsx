import { memo } from 'react';
import { MemoryCard } from './MemoryCard.jsx';

export const MemoryBoard = memo(function MemoryBoard({
  cards,
  flippedCardIds,
  matchedCardIds,
  isLocked,
  onFlipCard,
}) {
  if (cards.length === 0) {
    return (
      <section className="empty-board" aria-label="Arena sin partida">
        <p>Selecciona una dificultad y pulsa iniciar para encender la arena.</p>
      </section>
    );
  }

  return (
    <section className="memory-board" aria-label="Tablero de cartas">
      {cards.map((card) => (
        <MemoryCard
          card={card}
          isFlipped={flippedCardIds.includes(card.id)}
          isMatched={matchedCardIds.includes(card.id)}
          isLocked={isLocked}
          key={card.id}
          onFlip={onFlipCard}
        />
      ))}
    </section>
  );
});
