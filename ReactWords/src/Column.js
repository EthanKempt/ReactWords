import { columnAtom, rowAtom } from "./App";
import { useAtom } from 'jotai'
import { useEffect } from 'react';


export default function Column({ id, rowid, letter }) {
  const [column, setColumn] = useAtom(columnAtom);
  const [row, setRow] = useAtom(rowAtom);

  let s = '';
  if (column == id && row == rowid) {
    s = 'bg-success';
  }

  return (
    <span className={s}>
      <input value={letter} maxLength='1' type='text' className='box' disabled />
    </span>
  );
}