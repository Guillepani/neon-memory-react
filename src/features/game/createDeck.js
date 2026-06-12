import { CARD_POOL, DIFFICULTIES } from './cardData.js';

function shuffle(cards) {
  return [...cards].sort(() => Math.random() - 0.5);
}

export function createDeck(difficultyId) {
  const difficulty = DIFFICULTIES[difficultyId] ?? DIFFICULTIES.easy;
  const selectedCards = CARD_POOL.slice(0, difficulty.pairs);

  return shuffle(
    selectedCards.flatMap((card) => [
      {
        id: `${card.key}-a`,
        pairId: card.key,
        label: card.label,
        tone: card.tone,
      },
      {
        id: `${card.key}-b`,
        pairId: card.key,
        label: card.label,
        tone: card.tone,
      },
    ]),
  );
}
