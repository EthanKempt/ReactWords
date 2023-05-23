export default function Row({ isSelected }) {
  let s = '';
  if (isSelected) {
    s = 'bg-danger';
  }
  return (
    <div className={ s }>
      <input maxLength='1' type='text' className='box' />
      <input maxLength='1' type='text' className='box' />
      <input maxLength='1' type='text' className='box' />
      <input maxLength='1' type='text' className='box' />
      <input maxLength='1' type='text' className='box' />
    </div>
  );
}