'use client'

import { FirstLevelMenuItem, MenuItem } from "@/interfaces/menu.interface";
import styles from '../Menu.module.css';
import cn from 'classnames';
import { BuildThirdLevel } from "../Menu3Lvl";

type BuildSecondLevelProps = {
  menu: MenuItem[];
  menuItem: FirstLevelMenuItem;
}

export const BuildSecondLevel: React.FC<BuildSecondLevelProps> = ({ menu, menuItem }) => {
  return (
    <div>
      {menu.map((m) => (
        <div key={m._id.secondCategory}>
          <div className={styles.secondLevel}>{m._id.secondCategory}</div>
          <div
            className={cn(styles.secondLevelBlock, {
              [styles.secondLevelBlockOpened]: m.isOpened,
            })}
          >
            {/* {buildThirdLevel(m.pages, menuItem.route)} */}
            <BuildThirdLevel pages={m.pages} route={menuItem.route} />
          </div>
        </div>
      ))}
    </div>
  );
};