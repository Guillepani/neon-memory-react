export const CARD_POOL = [
  { key: 'nova', label: 'NOVA', tone: 'cyan' },
  { key: 'pulse', label: 'PULSE', tone: 'magenta' },
  { key: 'blade', label: 'BLADE', tone: 'green' },
  { key: 'void', label: 'VOID', tone: 'violet' },
  { key: 'cyber', label: 'CYBER', tone: 'cyan' },
  { key: 'laser', label: 'LASER', tone: 'magenta' },
  { key: 'orbit', label: 'ORBIT', tone: 'green' },
  { key: 'flux', label: 'FLUX', tone: 'violet' },
  { key: 'pixel', label: 'PIXEL', tone: 'cyan' },
  { key: 'neon', label: 'NEON', tone: 'magenta' },
];

export const DIFFICULTIES = {
  easy: {
    id: 'easy',
    label: 'Facil',
    pairs: 6,
    description: '12 cartas',
  },
  medium: {
    id: 'medium',
    label: 'Medio',
    pairs: 8,
    description: '16 cartas',
  },
  hard: {
    id: 'hard',
    label: 'Dificil',
    pairs: 10,
    description: '20 cartas',
  },
};

export const DIFFICULTY_LIST = Object.values(DIFFICULTIES);
