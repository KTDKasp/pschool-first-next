'use client'

import { MenuItem } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { firstLevelMenu } from "..";
import Link from "next/link";
import styles from '../Menu.module.css';
import cn from 'classnames';
import { BuildSecondLevel } from "../Menu2Lvl";
import React from "react";

type BuildFirstLevelProps = {
  firstCategory: TopLevelCategory;
  mainMenu: MenuItem[];
}

export const BuildFirstLevel: React.FC<BuildFirstLevelProps> = ({ firstCategory, mainMenu }) => {
  return (
    <>
      {firstLevelMenu.map((menuItem) => (
        <div key={menuItem.route}>
          <Link href={`/${menuItem.route}`}>
            <div
              className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: menuItem.id === firstCategory,
              })}
            >
              {menuItem.icon}
              <span>{menuItem.name}</span>
            </div>
          </Link>
          {menuItem.id === firstCategory &&
            <BuildSecondLevel menu={mainMenu} menuItem={menuItem} />}
        </div>
      ))}
    </>
  );
};