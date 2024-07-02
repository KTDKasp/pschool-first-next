import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './Ptag.module.css';

export interface PtagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

export const Ptag: React.FC<PtagProps> = ({ size = 'medium', children, ...props }) => {
  return <p className={cn(styles.p, styles[size])} {...props}>{children}</p>;
};
