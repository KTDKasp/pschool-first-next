import { FirstLevelMenuItem, MenuItem } from "@/interfaces/menu.interface";

import CoursesIcon from '../../../../public/svg/grad-hat.svg';
import ServicesIcon from '../../../../public/svg/cloud.svg';
import BooksIcon from '../../../../public/svg/book.svg';
import ProductsIcon from '../../../../public/svg/box.svg';
import { TopLevelCategory } from "@/interfaces/page.interface";
import { getMenu } from "@/api/menu";

const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products },
]

export const Menu = async (): Promise<JSX.Element> => {
  const firstCategory = TopLevelCategory.Courses;
  const menu = await getMenu(firstCategory);

  const buildFirstLevel = (menu: MenuItem[], firstCategory: TopLevelCategory) => {
    return (
      <div></div>
    )
  }

  return (
    <></>
  )
}