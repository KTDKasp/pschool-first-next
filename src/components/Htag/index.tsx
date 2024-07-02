import React from 'react';
import styles from './Htag.module.css';

export interface HtagProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  tag: 'h1' | 'h2' | 'h3';
}

export const Htag: React.FC<HtagProps> = ({ tag, children }) => {
  switch (tag) {
    case 'h1':
      return <h1 className={styles.h1}>{children}</h1>;
    case 'h2':
      return <h2 className={styles.h2}>{children}</h2>;
    case 'h3':
      return <h3 className={styles.h3}>{children}</h3>;
    default:
      return <></>;
  }
}
