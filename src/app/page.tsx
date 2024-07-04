import { Button, Htag, PageTag, Ptag, Rating } from '@/components';

export default function Home() {
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
    </main>
  );
}
