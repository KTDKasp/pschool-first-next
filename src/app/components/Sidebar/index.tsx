import React from 'react';
import cn from 'classnames';

import Logo from '../../../../public/svg/logo.svg';
import styles from './Sidebar.module.css';

export interface SidebarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo}/>
      <div>Поиск</div>
    {children}
  </div>
  );
};