import React from 'react';
import styles from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from '../../../public/svg/arrow-right.svg'

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  appearence?: 'primary' | 'ghost';
  arrow?: 'right' | 'down' | 'none'; 
}

export const Button: React.FC<ButtonProps> = ({
  appearence = 'primary',
  children,
  arrow = 'none',
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: appearence === 'primary',
        [styles.ghost]: appearence === 'ghost',
      })}
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <span className={cn(styles.arrow, {
          [styles.down]: arrow === 'down',
          [styles.right]: arrow === 'right',
        })}><ArrowIcon /></span>
      )}
    </button>
  );
};
