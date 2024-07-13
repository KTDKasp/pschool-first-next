import { getMenu } from "@/api/menu";
import { getPage } from "@/api/page";
import { firstLevelMenu } from "@/helpers/helpers";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Courses Page"
}

export async function generateStaticParams() { 
  const menu = await getMenu(0);  
  return menu.flatMap(item => item.pages.map(page => ({ alias: page.alias })))
}

export default async function TopPage({ params }: { params: { alias: string, type: string } } ) {
  const firstCategoryItem = firstLevelMenu.find(menu => menu.route === params.type);
  
  if (!firstCategoryItem) {
    notFound();
  }

  const page = await getPage(params.alias);
  if (!page) {
    notFound()
  }
  return (
    <div>
      {page.title}
    </div>
  )
}