import { Outlet } from 'react-router-dom';
import { Header } from './components/Layout/Header.jsx';
import { Footer } from './components/Layout/Footer.jsx';

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
