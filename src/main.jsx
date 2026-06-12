import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import { Game } from './pages/Game/Game.jsx';
import { Home } from './pages/Home/Home.jsx';
import { Instructions } from './pages/Instructions/Instructions.jsx';
import { NotFound } from './pages/NotFound/NotFound.jsx';
import './styles/global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="juego" element={<Game />} />
          <Route path="instrucciones" element={<Instructions />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
