import React from 'react';

export interface HeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ children, ...props }) => {
  return <header {...props}>{children}</header>;
};