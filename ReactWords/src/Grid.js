import { useState, useEffect } from 'react';
import Row from './Row';

export default function Grid() {
  useEffect(() => {
    const doSomething = () => { alert('a') };
    window.addEventListener('click', doSomething);

    return () => {
      window.removeEventListener('click', doSomething);
    }
  });

  const [selected, setSelected] = useState(4);
  return (
    <div>
      <Row id='1' isSelected={selected == 1} />
      <Row id='2' isSelected={selected == 2} />
      <Row id='3' isSelected={selected == 3} />
      <Row id='4' isSelected={selected == 4} />
      <Row id='5' isSelected={selected == 5} />
      <Row id='6' isSelected={selected == 6} />
    </div>
  );
}