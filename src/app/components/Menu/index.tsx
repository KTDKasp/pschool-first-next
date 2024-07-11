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
import { BuildFirstLevel } from './Menu1Lvl';

export const firstLevelMenu: FirstLevelMenuItem[] = [
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

  async function getAllMenu() {
    const allMenu = [];
    for (let i = 0; i < 4; i++) {
      const menu = await getMenu(i);
      allMenu.push(menu);
    }
    return allMenu;
  }

  const [menu0, menu1, menu2, menu3] = await getAllMenu();

  return (
    <div className={styles.menu}>
      <BuildFirstLevel firstCategory={firstMenuCategory} mainMenu={{
        courses: menu0,
        services: menu1,
        books: menu2,
        products: menu3
      }} />
    </div>
  );
};
