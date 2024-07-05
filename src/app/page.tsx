import { API } from '@/api';
import { Button, Htag, PageTag, Ptag, Rating } from '@/components';

async function getMenu(firstCategory: number): Promise<any[]> {
  const res = await fetch(API.topPage.find, {
    method: 'POST',
    body: JSON.stringify({
      firstCategory,
    }),
    headers: new Headers({ 'content-type': 'application/json' })
  });
  return res.json();
}

export default async function Home() {
  const menu = await getMenu(0)
  return (
    <main>
      <Htag tag="h3">Htag</Htag>
      <Button appearence="primary" arrow="right">
        Button
      </Button>
      <Button appearence="ghost" arrow="down" disabled>
        Button
      </Button>
      <Ptag size='small'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe deserunt
        labore aspernatur possimus, cum animi laboriosam? Quas, eos neque
        officiis, laborum aperiam a exercitationem nesciunt hic itaque sunt
        reprehenderit blanditiis!
      </Ptag>
      <PageTag size='small' color='ghost'>Ghost</PageTag>
      <PageTag size='medium' color='red'>Red</PageTag>
      <PageTag size='medium' color='green'>Green</PageTag>
      <PageTag size='medium' color='primary'>Primary</PageTag>
      <Rating isEditable={true} rating={4}/>
      <Rating rating={3}/>
      <div>
        {JSON.stringify(menu)}
      </div>
      <div>
        {menu.length}
      </div>
    </main>
  );
}
