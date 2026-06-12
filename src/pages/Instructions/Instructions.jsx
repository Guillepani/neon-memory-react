import './Instructions.css';

const steps = [
  'Elige una dificultad antes de iniciar la partida.',
  'Gira dos cartas por turno para buscar parejas iguales.',
  'Si coinciden, quedan descubiertas; si no, vuelven a ocultarse.',
  'Completa el tablero con el menor numero de movimientos posible.',
];

export function Instructions() {
  return (
    <section className="instructions-page" aria-labelledby="instructions-title">
      <div className="page-heading">
        <p className="eyebrow">Como jugar</p>
        <h1 id="instructions-title">Instrucciones</h1>
        <p>
          Memoriza la posicion de cada carta, descubre parejas y completa la arena con la
          menor cantidad de movimientos posible.
        </p>
      </div>

      <ol className="steps-list">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </section>
  );
}
