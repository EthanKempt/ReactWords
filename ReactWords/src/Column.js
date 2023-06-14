import { columnAtom, correctAtom, gridAtom, rowAtom, solvedAtom } from "./App";
import { useAtom } from 'jotai'
import { useEffect } from 'react';

export default function Column({ id, rowid }) {
  const [column, setColumn] = useAtom(columnAtom);
  const [row, setRow] = useAtom(rowAtom);
  const [grid, setGrid] = useAtom(gridAtom);
  const [correct, setCorrect] = useAtom(correctAtom);
  const [solved, setSolved] = useAtom(solvedAtom);

  const letter = grid[rowid - 1][id - 1];
  const c = correct[rowid - 1][id - 1];
  let classes = 'box';
  if (column == id && row == rowid && solved == false) {
    classes += ' underline-me';
  }
  if (c == true) {
    classes += ' bg-success';
  }

  return (
    <span>
      <input value={letter} maxLength='1' type='text' className={classes} disabled style={{ backgroundColor: color }} />
    </span>
  );
}