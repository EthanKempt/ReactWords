import { useState, useEffect } from 'react';
import Row from './Row';
import { useAtom } from 'jotai'
import { columnAtom, rowAtom } from "./App";

export default function Grid() {
  const [column, setColumn] = useAtom(columnAtom);
  const [row, setRow] = useAtom(rowAtom);

  useEffect(() => {
    const handleKeyUp = (event) => {
      const key = event.key;
      const size = key.length;

      if (size == 1 && key.match(/[A-z]/)) {
        var upper = key.toUpperCase();
        move1(upper);
      }

      if (key === 'backspace') {
        move1(upper);
      }
    };
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    }
  });

  function move1(upper) {
    if (column <= 4) {
      setColumn(column + 1)
    }
  }

  function backspace() {
    if (column >= 1) {
      setColumn(column - 1)
    }
  }

  return (
    <div>
      <Row id='1' />
      <Row id='2' />
      <Row id='3' />
      <Row id='4' />
      <Row id='5' />
      <Row id='6' />
    </div>
  );
}