import { TopLevelCategory } from '@/interfaces/page.interface';
import { getMenu } from '@/api/menu';
import { BuildFirstLevel } from './MenuComponent';

import styles from './Menu.module.css';

export const Menu = async (): Promise<JSX.Element> => {
  const firstMenuCategory = TopLevelCategory.Courses;
  const mainMenu = await getMenu(firstMenuCategory);

  async function getAllMenu() {
    const allMenu = [];
    for (let i = 0; i < 4; i++) {
      const data = await getMenu(i)
      allMenu.push(data);
    }
    return allMenu;
  }

  const [menu0, menu1, menu2, menu3] = await getAllMenu();

  return (
    <div className={styles.menu}>
      {/* {buildFirstLevel(firstMenuCategory)} */}
      <BuildFirstLevel firstCategory={firstMenuCategory} menu={{
        courses: menu0, services: menu1, books: menu2, products: menu3
      }} />
    </div>
  );
};
