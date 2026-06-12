# Neon Memory Arena

Proyecto 12 del bootcamp: **React Avanzado**.

**Neon Memory Arena** es una mini aplicación de juego Memory desarrollada con React. El objetivo es encontrar todas las parejas de cartas en el menor número de movimientos y tiempo posible, eligiendo entre distintos niveles de dificultad.

La aplicación está construida priorizando una arquitectura limpia, componentes reutilizables, rutas con React Router DOM, gestión de estado avanzada con `useReducer`, uso de custom hooks y optimización de renderizados.

---

## Tecnologías utilizadas

- React
- Vite
- React Router DOM
- JavaScript
- CSS
- HTML semántico

---

## Funcionalidades principales

- Página de inicio visual.
- Juego Memory funcional.
- Selector de dificultad:

  - Fácil
  - Medio
  - Difícil
- Cartas con estética neón/arcade.
- Barajado aleatorio de cartas en cada partida.
- Contador de movimientos.
- Temporizador de partida.
- Detección automática de victoria.
- Pantalla final con resumen de la partida.
- Reinicio de partida.
- Página de instrucciones.
- Página 404 para rutas inexistentes.
- Diseño responsive para móvil, tablet y desktop.

---

## Rutas disponibles

| Ruta             | Descripción             |
| ---------------- | ----------------------- |
| `/`              | Página de inicio        |
| `/juego`         | Juego Memory            |
| `/instrucciones` | Instrucciones del juego |
| `*`              | Página 404              |

---

## Requisitos del bootcamp cumplidos

### Full responsive

La interfaz está adaptada a diferentes tamaños de pantalla, incluyendo móvil, tablet y escritorio.

### Buen uso de CSS y arquitectura HTML

El proyecto utiliza CSS propio, variables globales, estructura visual clara y etiquetas HTML semánticas como `main`, `section`, `header`, `nav`, `article` y `button`.

### Uso de React Router DOM

La navegación principal de la aplicación está gestionada mediante `react-router-dom`.

### Creación y uso de custom hook

El proyecto incluye un custom hook `useTimer`, encargado de gestionar el temporizador del juego.

### Uso de useReducer

La lógica principal del juego se gestiona mediante `useReducer`, incluyendo selección de dificultad, inicio de partida, giro de cartas, comprobación de parejas, movimientos, victoria y reinicio.

### Evitar re-renderizaciones innecesarias

Se han aplicado optimizaciones con herramientas como `React.memo`, `useMemo` y/o `useCallback` donde tiene sentido, evitando sobreoptimizar el código.

### Componentes correctos

El proyecto está dividido en componentes reutilizables y bien separados, manteniendo la lógica fuera del JSX siempre que es posible.

---

## Instalación y ejecución

Clonar el repositorio:

```bash
git clone https://github.com/Guillepani/neon-memory-react.git
```

Entrar en la carpeta del proyecto:

```bash
cd neon-memory-react
```

Instalar dependencias:

```bash
npm install
```

Ejecutar en modo desarrollo:

```bash
npm run dev
```

Crear build de producción:

```bash
npm run build
```

---

## Scripts disponibles

```bash
npm run dev
```

Inicia el servidor de desarrollo.

```bash
npm run build
```

Genera la versión de producción.

```bash
npm run lint
```

Ejecuta la revisión de lint disponible en el proyecto.

---

## Estructura general del proyecto

```txt
src/
  components/
  features/
    game/
  hooks/
  pages/
  styles/
  App.jsx
  main.jsx
```

La estructura mantiene una separación clara entre páginas, componentes, lógica del juego, hooks personalizados y estilos.

---

## Objetivo del proyecto

El objetivo principal de este proyecto es demostrar el uso de conceptos de React avanzado en una aplicación sencilla, visual y funcional, sin añadir complejidad innecesaria.

Se ha priorizado cumplir correctamente la rúbrica del bootcamp mediante:

- arquitectura limpia;
- componentes reutilizables;
- estado avanzado con `useReducer`;
- custom hook propio;
- rutas con React Router DOM;
- diseño responsive;
- optimización razonable de renderizados;
- buena experiencia de usuario.

---

## Autor

Proyecto realizado por **Guillem Paniagua** como parte del bootcamp RockTheCode.
