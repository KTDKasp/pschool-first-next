'use client'

import { PageItem } from "@/interfaces/menu.interface";
import Link from "next/link";
import styles from '../Menu.module.css';
import cn from 'classnames';

type BuildThirdLevelProps = {
  pages: PageItem[];
  route: string;
}

export const BuildThirdLevel: React.FC<BuildThirdLevelProps> = ({ pages, route }) => {
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