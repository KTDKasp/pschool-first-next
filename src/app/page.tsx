import Image from 'next/image';
import { Button, Htag, Ptag } from '@/components';

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
    </main>
  );
}
