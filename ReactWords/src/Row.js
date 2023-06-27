import Column from './Column';
import { useAtom } from 'jotai'
import { letterCountAtom } from "./App";

export default function Row({ id }) {
  const [letterCount, setLetterCount] = useAtom(letterCountAtom);

  if (letterCount == 4) {
    return (
      <div>
        <Column id='1' rowid={id} />
        <Column id='2' rowid={id} />
        <Column id='3' rowid={id} />
        <Column id='4' rowid={id} />
      </div>
    );
  }
  if (letterCount == 5) {
    return (
      <div>
        <Column id='1' rowid={id} />
        <Column id='2' rowid={id} />
        <Column id='3' rowid={id} />
        <Column id='4' rowid={id} />
        <Column id='5' rowid={id} />
      </div>
    );
  }
  if (letterCount == 6) {
    return (
      <div>
        <Column id='1' rowid={id} />
        <Column id='2' rowid={id} />
        <Column id='3' rowid={id} />
        <Column id='4' rowid={id} />
        <Column id='5' rowid={id} />
        <Column id='6' rowid={id} />
      </div>
    );
  }
}