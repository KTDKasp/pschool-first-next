import { API } from "@/api";
import { notFound } from "next/navigation";

export async function getPage(alias: string): Promise<any | null> {
  const res = await fetch(API.topPage.byAlias + alias);
  if (!res.ok) return null;
  return res.json();
}

export default async function PageProducts({ params }: { params: { alias: string } } ) {
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