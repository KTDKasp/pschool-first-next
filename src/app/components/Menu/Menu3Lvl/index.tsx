'use client'

import { PageItem } from "@/interfaces/menu.interface";
import Link from "next/link";
import styles from '../Menu.module.css';
import cn from 'classnames';
import { usePathname } from "next/navigation";

type BuildThirdLevelProps = {
  pages: PageItem[];
  route: string;
}

export const BuildThirdLevel: React.FC<BuildThirdLevelProps> = ({ pages, route }) => {
  const pathname = usePathname();

  return pages.map((p) => (
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
  ));
};