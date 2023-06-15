import { columnAtom, correctAtom, gridAtom, rowAtom, solvedAtom, flippingAtom } from "./App";
import { useAtom } from 'jotai'
import { useEffect } from 'react';

export default function Column({ id, rowid }) {
  const [column, setColumn] = useAtom(columnAtom);
  const [row, setRow] = useAtom(rowAtom);
  const [grid, setGrid] = useAtom(gridAtom);
  const [correct, setCorrect] = useAtom(correctAtom);
  const [solved, setSolved] = useAtom(solvedAtom);
  const [flipping, setFlipping] = useAtom(flippingAtom);

  const letter = grid[rowid - 1][id - 1];
  const c = correct[rowid - 1][id - 1];
  const f = flipping[rowid - 1][id - 1];
  let color = 'white';
  let classes = 'box';

  if (column == id && row == rowid && solved == false) {
    classes += ' underline-me';
  }
  if (c == 'green') {
    color = 'green';
  } else if (c == 'yellow') {
    color = 'yellow';
  } else if (c == 'grey') {
    color = 'gray';
  }

  if (f == true) {
    classes += ` flip${id}` ;
  }

  return (
    <span>
      <input value={letter} maxLength='1' type='text' className={classes} disabled style={{ backgroundColor: color }} />
    </span>
  );
}