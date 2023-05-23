import { useState, useEffect } from 'react';
import Row from './Row';

export default function Grid() {
  useEffect(() => {
    const doSomething = (event) => {
      const key = event.key;
      const size = key.length;

      if (size == 1 && key.match(/[A-z]/)) {
        var upper = key.toUpperCase();
        alert(upper);
      }
    };
    window.addEventListener('keyup', doSomething);



    return () => {
      window.removeEventListener('keyup', doSomething);
    }
  });

  const [row, setRow] = useState(1);
  const [column, setColumn] = useState(1);
  return (
    <div>
      <Row id='1' isSelected={row == 1} column={column} />
      <Row id='2' isSelected={row == 2} />
      <Row id='3' isSelected={row == 3} />
      <Row id='4' isSelected={row == 4} />
      <Row id='5' isSelected={row == 5} />
      <Row id='6' isSelected={row == 6} />
    </div>
  );
}