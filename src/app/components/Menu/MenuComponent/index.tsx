'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import cn from 'classnames';

import { TopLevelCategory } from '@/interfaces/page.interface';
import { firstLevelMenu } from '../index';
import {
  FirstLevelMenuItem,
  MenuItem,
  PageItem,
} from '@/interfaces/menu.interface';

import styles from '../Menu.module.css';

type MenuProps = {
  courses: MenuItem[];
  services: MenuItem[];
  books: MenuItem[];
  products: MenuItem[];
};

type FirstLevelProps = {
  firstCategory: TopLevelCategory;
  menu: MenuProps;
};
type PathnameSliced = 'courses' | 'services' | 'books' | 'products';

type SecondLevelProps = {
  menuItem: FirstLevelMenuItem;
  menu: MenuItem[];
};

type ThirdLevelProps = {
  pages: PageItem[];
  route: string;
};

export const BuildFirstLevel: React.FC<FirstLevelProps> = ({
  firstCategory,
  menu,
}) => {
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
          {menuItem.route === pathnameSliced && (
            <BuildSecondLevel
              menu={menu[`${pathnameSliced}`]}
              menuItem={menuItem}
            />
          )}
        </div>
      ))}
    </>
  );
};

const BuildSecondLevel: React.FC<SecondLevelProps> = ({ menu, menuItem }) => {
  const [newMenu, setNewMenu] = React.useState<MenuItem[]>(menu);
  const pathname = usePathname();

  const openSecondLevel = (secondCategory: string) => {
    setNewMenu(menu.map((m) => {
      if (m._id.secondCategory === secondCategory) {
        m.isOpened = !m.isOpened;
      }
      return m;
    }));
  };

  return (
    <div className={styles.secondBlock}>
      {newMenu.map((m) => {
        if (m.pages.map((p) => p.alias).includes(pathname.split('/')[2])) {
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

const BuildThirdLevel: React.FC<ThirdLevelProps> = ({ pages, route }) => {
  const pathname = usePathname();
  return (
    <>
      {pages.map((p) => (
        <div key={p.alias}>
          <Link
            href={`/${route}/${p.alias}`}
            className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: `/${route}/${p.alias}` === pathname,
            })}
          >
            {p.category}
          </Link>
        </div>
      ))}
    </>
  );
};
