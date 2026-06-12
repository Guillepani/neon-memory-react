import { NavLink } from 'react-router-dom';
import './Layout.css';

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/juego', label: 'Juego' },
  { to: '/instrucciones', label: 'Instrucciones' },
];

export function Header() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Navegacion principal">
        <NavLink to="/" className="brand-link" aria-label="Neon Memory Arena">
          <span className="brand-mark" aria-hidden="true">
            NM
          </span>
          <span className="brand-name">Neon Memory Arena</span>
        </NavLink>

        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive ? 'nav-link nav-link--active' : 'nav-link'
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
