import React from 'react';
import cn from 'classnames';
import styles from './PageTag.module.css';

export interface PageTagProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  size?: 'small' | 'medium';
  color?: 'gray' | 'green' | 'primary' | 'red' | 'ghost';
  href?: string;
}

export const PageTag: React.FC<PageTagProps> = ({
  children,
  size = 'medium',
  color = 'ghost',
  href,
  ...props
}) => {
  return <div className={cn(styles['page-tag'], styles[size], styles[color])} {...props}>
    {
      href ? <a href={href}>{children}</a> : <>{children}</>
    }
  </div>;
};
