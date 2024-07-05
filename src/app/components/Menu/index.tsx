import {
  FirstLevelMenuItem,
  MenuItem,
  PageItem,
} from '@/interfaces/menu.interface';
import cn from 'classnames';

import CoursesIcon from '../../../../public/svg/grad-hat.svg';
import ServicesIcon from '../../../../public/svg/cloud.svg';
import BooksIcon from '../../../../public/svg/book.svg';
import ProductsIcon from '../../../../public/svg/box.svg';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { getMenu } from '@/api/menu';

import styles from './Menu.module.css';
import Link from 'next/link';

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Продукты',
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];

export const Menu = async (): Promise<JSX.Element> => {
  const firstMenuCategory = TopLevelCategory.Courses;
  const mainMenu = await getMenu(firstMenuCategory);

  const buildFirstLevel = (firstCategory: TopLevelCategory) => {
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
              buildSecondLevel(mainMenu, menuItem)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menu: MenuItem[], menuItem: FirstLevelMenuItem) => {
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
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <>
        <Link
          href={`/${route}/${p.alias}`}
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: false,
          })}
        >
          {p.category}
        </Link>
      </>
    ));
  };

  return (
    <div className={styles.menu}>{buildFirstLevel(firstMenuCategory)}</div>
  );
};
