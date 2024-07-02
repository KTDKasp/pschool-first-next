import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import cn from 'classnames';
import styles from './PageTag.module.css';

export interface PageTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  size?: 'small' | 'medium';
  color?: 'gray' | 'green' | 'primary' | 'red' | 'ghost';
  href?: string;
} 

export const PageTag: React.FC<PageTagProps> = ({ children, ...props }) => {
  return (
    <div  {...props}></div>
  )
}
