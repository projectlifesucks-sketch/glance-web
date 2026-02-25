import styles from './InputBar.module.css';

export function InputBar() {
  return (
    <div className={styles.container}>
      <div className={styles.inner} data-testid="input-bar">
        <div className={styles.inputArea}>
          <span className={styles.placeholder}>Type here...</span>
          <span className={styles.cursor} />
        </div>
        <button className={styles.sendButton} data-testid="send-button">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M5 13L13 5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 5H13V12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
