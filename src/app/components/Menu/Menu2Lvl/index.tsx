'use client';

import { FirstLevelMenuItem, MenuItem } from '@/interfaces/menu.interface';
import styles from '../Menu.module.css';
import cn from 'classnames';
import { BuildThirdLevel } from '../Menu3Lvl';
import { usePathname } from 'next/navigation';
import React from 'react';

type BuildSecondLevelProps = {
  menu: MenuItem[];
  menuItem: FirstLevelMenuItem;
};

export const BuildSecondLevel: React.FC<BuildSecondLevelProps> = ({
  menu,
  menuItem,
}) => {

  const pathname = usePathname();

  const openSecondLevel = (secondCategory: string) => {
    console.log(111);
    
    // menu.map((m) => {
    //   if (m._id.secondCategory === secondCategory) {
    //     m.isOpened = !m.isOpened;
    //   }
    //   return m;
    // });
  };

  return (
    <div>
      {menu.map((m) => {
        if (
          m.pages.map((p) => p.alias).includes(pathname.split('/')[2])
        ) {
          m.isOpened = true;
        }
        return (
          <div key={m._id.secondCategory}>
            <div
              className={styles.secondLevel}
              onClick={() => openSecondLevel(m._id.secondCategory)}
            >
              {m._id.secondCategory}
            </div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened,
              })}
            >
              <BuildThirdLevel pages={m.pages} route={menuItem.route} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
