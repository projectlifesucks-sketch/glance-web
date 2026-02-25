import { type ReactNode } from 'react';
import styles from './IconButton.module.css';

type IconButtonProps = {
  children: ReactNode;
  size?: number;
  onClick?: () => void;
  'data-testid'?: string;
};

export function IconButton({ children, size = 36, onClick, 'data-testid': testId }: IconButtonProps) {
  return (
    <button
      className={styles.iconButton}
      style={{ width: size, height: size }}
      onClick={onClick}
      data-testid={testId}
    >
      {children}
    </button>
  );
}
