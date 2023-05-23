export default function Column({ isSelected }) {
  let s = '';
  if (isSelected) {
    s = 'bg-success';
  }
  return (
    <span className={ s }>
      <input maxLength='1' type='text' className='box' disabled />
    </span>
  );
}