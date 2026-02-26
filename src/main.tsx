import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import { SplashScreen } from './features/splash';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SplashScreen />
  </StrictMode>,
);
// QA pipeline test v2 - Thu Feb 26 13:20:27 IST 2026
