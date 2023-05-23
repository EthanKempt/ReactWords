export default function Row({ isSelected, column }) {
  let s = '';
  if (isSelected) {
    s = 'bg-danger';
  }
  return (
    <div className={ s }>
      <input maxLength='1' type='text' className='box' disabled />
      <input maxLength='1' type='text' className='box' disabled />
      <input maxLength='1' type='text' className='box' disabled />
      <input maxLength='1' type='text' className='box' disabled />
      <input maxLength='1' type='text' className='box' disabled />
    </div>
  );
}