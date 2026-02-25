import { useState, useEffect } from 'react';
import { IconButton } from '../../../shared/components/IconButton';
import { Button } from '../../../shared/components/Button';
import { Card } from '../../../shared/components/Card';
import { InputBar } from '../../../shared/components/InputBar';
import { TypingText } from './TypingText';
import styles from './SplashScreen.module.css';

const GREETING_LINE1 = 'Hi Rumit,';
const GREETING_LINE2 = 'What are you looking for?';
const AI_RESPONSE = 'Love this vibe! Would you like to generate your look or refine it further?';

export function SplashScreen() {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCards(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.screen} data-testid="splash-container">
      {/* Status Bar */}
      <div className={styles.statusBar} data-testid="status-bar">
        <span className={styles.time}>11:11</span>
        <div className={styles.statusIcons}>
          {/* Signal */}
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect x="0" y="8" width="3" height="4" rx="0.5" fill="#fff"/>
            <rect x="4.5" y="5" width="3" height="7" rx="0.5" fill="#fff"/>
            <rect x="9" y="2" width="3" height="10" rx="0.5" fill="#fff"/>
            <rect x="13" y="0" width="3" height="12" rx="0.5" fill="#fff" fillOpacity="0.3"/>
          </svg>
          {/* WiFi */}
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <path d="M1 3.5C4.5 0.5 11.5 0.5 15 3.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M3.5 6C5.5 4.2 10.5 4.2 12.5 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M6 8.5C7 7.7 9 7.7 10 8.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="8" cy="11" r="1" fill="#fff"/>
          </svg>
          {/* Battery */}
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
            <rect x="0.5" y="0.5" width="20" height="11" rx="2" stroke="#fff" strokeOpacity="0.5"/>
            <rect x="2" y="2" width="14" height="8" rx="1" fill="#fff"/>
            <path d="M22 4.5V7.5C22.8 7.2 22.8 4.8 22 4.5Z" fill="#fff" fillOpacity="0.5"/>
          </svg>
        </div>
      </div>

      {/* Header */}
      <div className={styles.header} data-testid="header">
        <IconButton data-testid="back-button">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </IconButton>
        <div className={styles.logo}>
          <span className={styles.logoStar}>✦</span> glance
        </div>
        <div className={styles.headerRight}>
          <IconButton>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6.5" stroke="#fff" strokeWidth="1.5"/>
              <polyline points="8,4.5 8,8 10.5,9.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.5 3.5L14 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </IconButton>
          <IconButton>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <line x1="8" y1="3" x2="8" y2="13" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="3" y1="8" x2="13" y2="8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </IconButton>
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={`${styles.greeting} ${styles.hidden}`}>
          <TypingText text={GREETING_LINE1} className={styles.greetingLight} delayMs={50} startDelay={200} />
          <TypingText text={GREETING_LINE2} className={styles.greetingBold} delayMs={40} startDelay={800} />
        </div>

        <p className={styles.aiResponse} data-testid="ai-response">{AI_RESPONSE}</p>

        <div className={styles.actions}>
          <Button label="Refine Further" data-testid="btn-refine" />
          <Button label="Confirm" data-testid="btn-confirm" />
        </div>

        {/* Feedback Icons */}
        <div className={styles.feedbackIcons} data-testid="feedback-icons">
          {/* Thumbs up */}
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M6 9V17H3.5C2.67 17 2 16.33 2 15.5V10.5C2 9.67 2.67 9 3.5 9H6ZM6 9L9 3C9.8 3 10.56 3.32 11.12 3.88C11.68 4.44 12 5.2 12 6V8H16.5C16.82 8 17.13 8.07 17.41 8.21C17.69 8.35 17.93 8.55 18.11 8.8C18.29 9.04 18.41 9.33 18.45 9.63C18.49 9.93 18.45 10.24 18.33 10.52L16 16.02C15.84 16.39 15.57 16.7 15.23 16.92C14.89 17.13 14.5 17.24 14.1 17.24H6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {/* Thumbs down */}
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M14 11V3H16.5C17.33 3 18 3.67 18 4.5V9.5C18 10.33 17.33 11 16.5 11H14ZM14 11L11 17C10.2 17 9.44 16.68 8.88 16.12C8.32 15.56 8 14.8 8 14V12H3.5C3.18 12 2.87 11.93 2.59 11.79C2.31 11.65 2.07 11.45 1.89 11.2C1.71 10.96 1.59 10.67 1.55 10.37C1.51 10.07 1.55 9.76 1.67 9.48L4 3.98C4.16 3.61 4.43 3.3 4.77 3.08C5.11 2.87 5.5 2.76 5.9 2.76H14" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {/* Copy */}
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <rect x="6" y="6" width="11" height="12" rx="1.5" stroke="#fff" strokeWidth="1.5"/>
            <path d="M14 6V4.5C14 3.67 13.33 3 12.5 3H4.5C3.67 3 3 3.67 3 4.5V13.5C3 14.33 3.67 15 4.5 15H6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          {/* More dots */}
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="5" r="1.5" fill="#fff"/>
            <circle cx="10" cy="10" r="1.5" fill="#fff"/>
            <circle cx="10" cy="15" r="1.5" fill="#fff"/>
          </svg>
        </div>

        <div className={`${styles.cards} ${showCards ? '' : styles.hidden}`}>
          <Card
            icon={<svg viewBox="0 0 22 22" fill="none"><path d="M11 2C8 2 6 5 6 8C6 12 8 14 11 14C14 14 16 12 16 8C16 5 14 2 11 2Z" stroke="#fff" strokeWidth="1.5"/><path d="M7 14C4 15 3 18 3 20H19C19 18 18 15 15 14" stroke="#fff" strokeWidth="1.5"/></svg>}
            title="Hairstyle"
            subtitle="See which style suits you best"
          />
          <Card
            icon={<svg viewBox="0 0 22 22" fill="none"><path d="M6 11C6 8 8 4 11 4C14 4 16 8 16 11C16 15 13 18 11 18C9 18 6 15 6 11Z" stroke="#fff" strokeWidth="1.5"/><circle cx="9" cy="10" r="1" fill="#fff"/><circle cx="13" cy="10" r="1" fill="#fff"/></svg>}
            title="Pets"
            subtitle="Find your perfect companion look"
          />
          <Card
            icon={<svg viewBox="0 0 22 22" fill="none"><rect x="3" y="6" width="16" height="10" rx="2" stroke="#fff" strokeWidth="1.5"/><circle cx="11" cy="11" r="3" stroke="#fff" strokeWidth="1.5"/></svg>}
            title="Accessories"
            subtitle="Complete your outfit"
          />
        </div>
      </div>

      <InputBar />
    </div>
  );
}
