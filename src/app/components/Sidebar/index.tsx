import React from 'react';

export interface SidebarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};