import { useState, useEffect } from 'react';
import Row from './Row';
import { useAtom } from 'jotai'
import { columnAtom, rowAtom, letterAtom } from "./App";

export default function Grid() {
  const [column, setColumn] = useAtom(columnAtom);
  const [row, setRow] = useAtom(rowAtom);
  const [letter, setLetter] = useAtom(letterAtom)

  useEffect(() => {
    const handleKeyUp = (event) => {
      const key = event.key;
      const size = key.length;

      if (key === 'Backspace') {
        backspace();
      } else if (key === 'Enter') {
        enter();
      } else {
        if (size == 1 && key.match(/[A-z]/) && column < 6) {
          var upper = key.toUpperCase();
          setLetter(upper);
          setColumn(column + 1)
        }
      }
    };
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    }
  });

  function backspace() {
    if (column > 1) {
      setColumn(column - 1);
    }
  }

  function enter() {
    if (column == 6) {
      setRow(row + 1);
      setColumn(1);
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