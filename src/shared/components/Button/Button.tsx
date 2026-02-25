import styles from './Button.module.css';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  'data-testid'?: string;
};

export function Button({ label, onClick, 'data-testid': testId }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick} data-testid={testId}>
      {label}
    </button>
  );
}
