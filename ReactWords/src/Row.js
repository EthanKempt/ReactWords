import Column from './Column';

export default function Row({ isRowSelected, column }) {
  let s = '';
  if (isRowSelected) {
    s = 'bg-danger';
  }
  return (
    <div className={s}>
      <Column isSelected={column == 1 && isRowSelected} />
      <Column isSelected={column == 2 && isRowSelected} />
      <Column isSelected={column == 3 && isRowSelected} />
      <Column isSelected={column == 4 && isRowSelected} />
      <Column isSelected={column == 5 && isRowSelected} />
    </div>
  );
}