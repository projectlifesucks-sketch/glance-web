import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import { SplashScreen } from './features/splash';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SplashScreen />
  </StrictMode>,
);
// QA pipeline test - Thu Feb 26 12:53:33 IST 2026
