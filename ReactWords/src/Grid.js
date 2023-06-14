import { useState, useEffect } from 'react';
import Row from './Row';
import { useAtom } from 'jotai'
import { columnAtom, rowAtom, gridAtom, wordAtom, correctAtom, solvedAtom } from "./App";

export default function Grid() {
  const [column, setColumn] = useAtom(columnAtom);
  const [row, setRow] = useAtom(rowAtom);
  const [grid, setGrid] = useAtom(gridAtom)
  const [word, setWord] = useAtom(wordAtom)
  const [correct, setCorrect] = useAtom(correctAtom);
  const [solved, setSolved] = useAtom(solvedAtom);


  useEffect(() => {
    const handleKeyUp = (event) => {
      const key = event.key;
      const size = key.length;
      if (row < 7 && solved == false) {
        if (key === 'Backspace') {
          backspace();
        } else if (key === 'Enter') {
          enter();
        } else {
          if (size == 1 && key.match(/[A-Z|a-z]/) && column < 6) {
            var upper = key.toUpperCase();
            type(upper);
            setColumn(column + 1);
          }
        }
      }
    };
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    }
  });

  function type(upper) {
    let g = grid;
    g[row - 1][column - 1] = upper;
    setGrid(g);
  }

  function backspace() {
    if (column > 1) {
      let g = grid;
      g[row - 1][column - 2] = '';
      setGrid(g);
      setColumn(column - 1);
    }
  }

  function enter() {
    if (column == 6) {
      setRow(row + 1);
      setColumn(1);
      var answer = word[0] + word[1] + word[2] + word[3] + word[4] + word[5];
      var guessArray = grid[row - 1];
      var guess = guessArray[0] + guessArray[1] + guessArray[2] + guessArray[3] + guessArray[4] + guessArray[5];
      const c = correct;
      var x = 0;
      for (let i = 0; i < guessArray.length; i++) {
        const item = guessArray[i];
        const itemAnswer = answer[i];
        if (item == itemAnswer) {
          c[row - 1][i] = true;
          x++;
        }
      }
      setCorrect(c);
      if (x == 5) {
        setSolved(true);
      }
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