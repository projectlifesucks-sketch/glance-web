import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import { SplashScreen } from './features/splash';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SplashScreen />
  </StrictMode>,
);
// QA pipeline test v3 - Thu Feb 26 16:58:39 IST 2026
