import { DIFFICULTIES } from './cardData.js';

export const GAME_STATUS = {
  idle: 'idle',
  playing: 'playing',
  checking: 'checking',
  won: 'won',
};

export const GAME_ACTIONS = {
  selectDifficulty: 'game/selectDifficulty',
  startGame: 'game/startGame',
  flipCard: 'game/flipCard',
  checkPair: 'game/checkPair',
  resetGame: 'game/resetGame',
};

export const initialGameState = {
  difficulty: DIFFICULTIES.easy.id,
  cards: [],
  flippedCardIds: [],
  matchedCardIds: [],
  moves: 0,
  status: GAME_STATUS.idle,
};

function isCardAvailable(state, cardId) {
  return (
    state.status === GAME_STATUS.playing &&
    state.flippedCardIds.length < 2 &&
    !state.flippedCardIds.includes(cardId) &&
    !state.matchedCardIds.includes(cardId)
  );
}

export function gameReducer(state, action) {
  switch (action.type) {
    case GAME_ACTIONS.selectDifficulty:
      return {
        ...initialGameState,
        difficulty: action.payload.difficulty,
      };

    case GAME_ACTIONS.startGame:
      return {
        ...initialGameState,
        difficulty: state.difficulty,
        cards: action.payload.cards,
        status: GAME_STATUS.playing,
      };

    case GAME_ACTIONS.flipCard: {
      const cardId = action.payload.cardId;

      if (!isCardAvailable(state, cardId)) {
        return state;
      }

      const flippedCardIds = [...state.flippedCardIds, cardId];
      const isSecondCard = flippedCardIds.length === 2;

      return {
        ...state,
        flippedCardIds,
        moves: isSecondCard ? state.moves + 1 : state.moves,
        status: isSecondCard ? GAME_STATUS.checking : GAME_STATUS.playing,
      };
    }

    case GAME_ACTIONS.checkPair: {
      if (state.flippedCardIds.length !== 2) {
        return state;
      }

      const [firstId, secondId] = state.flippedCardIds;
      const firstCard = state.cards.find((card) => card.id === firstId);
      const secondCard = state.cards.find((card) => card.id === secondId);
      const isPair = firstCard?.pairId === secondCard?.pairId;
      const matchedCardIds = isPair
        ? [...state.matchedCardIds, firstId, secondId]
        : state.matchedCardIds;
      const hasWon = matchedCardIds.length === state.cards.length;

      return {
        ...state,
        flippedCardIds: [],
        matchedCardIds,
        status: hasWon ? GAME_STATUS.won : GAME_STATUS.playing,
      };
    }

    case GAME_ACTIONS.resetGame:
      return {
        ...initialGameState,
        difficulty: state.difficulty,
      };

    default:
      return state;
  }
}
