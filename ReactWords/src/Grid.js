import { useState, useEffect } from 'react';
import Row from './Row';

export default function Grid() {
  useEffect(() => {
    const handleKeyUp = (event) => {
      const key = event.key;
      const size = key.length;

      if (size == 1 && key.match(/[A-z]/)) {
        var upper = key.toUpperCase();
        alert(upper);
      }
    };
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    }
  });

  const [row, setRow] = useState(2);
  const [column, setColumn] = useState(2);
  return (
    <div>
      <Row id='1' isRowSelected={row == 1} column={column} />
      <Row id='2' isRowSelected={row == 2} column={column} />
      <Row id='3' isRowSelected={row == 3} column={column} />
      <Row id='4' isRowSelected={row == 4} column={column} />
      <Row id='5' isRowSelected={row == 5} column={column} />
      <Row id='6' isRowSelected={row == 6} column={column} />
    </div>
  );
}