import { type ReactNode } from 'react';
import styles from './Card.module.css';

type CardProps = {
  icon: ReactNode;
  title: string;
  subtitle: string;
  className?: string;
};

export function Card({ icon, title, subtitle, className }: CardProps) {
  return (
    <div className={`${styles.card} ${className ?? ''}`}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  );
}
