import { columnAtom, rowAtom } from "./App";
import { useAtom } from 'jotai'

export default function Column({ id, rowid }) {
  const [column, setColumn] = useAtom(columnAtom);
  const [row, setRow] = useAtom(rowAtom);

  let s = '';
  if (column == id && row == rowid) {
    s = 'bg-success';
  }
  return (
    <span className={s}>
      <input maxLength='1' type='text' className='box' disabled />
    </span>
  );
}