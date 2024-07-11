'use client'

import { MenuItem } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { firstLevelMenu } from "../index";
import Link from "next/link";
import styles from '../Menu.module.css';
import cn from 'classnames';
import { BuildSecondLevel } from "../Menu2Lvl";
import React from "react";
import { usePathname } from "next/navigation";

type Menu1LvlProps = {
  courses: MenuItem[];
  services: MenuItem[];
  books: MenuItem[];
  products: MenuItem[];
}

type BuildFirstLevelProps = {
  firstCategory: TopLevelCategory;
  mainMenu: Menu1LvlProps;
}
type PathnameSliced = 'courses' | 'services' | 'books' | 'products';

export const BuildFirstLevel: React.FC<BuildFirstLevelProps> = ({ firstCategory, mainMenu }) => {
  const pathname = usePathname();
  const pathnameSliced = pathname.split('/')[1] as PathnameSliced; 

  return (
    <>
      {firstLevelMenu.map((menuItem) => (
        <div key={menuItem.route}>
          <Link href={`/${menuItem.route}`}>
            <div
              className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: menuItem.route === pathnameSliced,
              })}
            >
              {menuItem.icon}
              <span>{menuItem.name}</span>
            </div>
          </Link>
          {menuItem.route === pathnameSliced &&
            <BuildSecondLevel menu={mainMenu[`${pathnameSliced}`]} menuItem={menuItem} />}
        </div>
      ))}
    </>
  );
};