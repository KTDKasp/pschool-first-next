import React from 'react';
import cn from 'classnames';
import styles from './Footer.module.css';

export interface FooterProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = ({ children, className, ...props }) => {
  return <header className={cn(className, styles.footer)} {...props}>
    <div>
    OwlTop © 2020 - {new Date().getFullYear()} Все права защищены
    </div>
    <a href="#" target='_blank'>Пользовательское соглашение</a>
    <a href="#" target='_blank'>Политика конфиденциальности</a>
  </header>;
};