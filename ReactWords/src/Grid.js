import { useState, useEffect, useRef } from 'react';
import Row from './Row';
import { useAtom } from 'jotai'
import { columnAtom, rowAtom, gridAtom, wordAtom, correctAtom, solvedAtom, flippingAtom, letterCountAtom, guessCountAtom } from "./App";
import Column from './Column';

export default function Grid() {
  const [column, setColumn] = useAtom(columnAtom);
  const [row, setRow] = useAtom(rowAtom);
  const [grid, setGrid] = useAtom(gridAtom);
  const [word, setWord] = useAtom(wordAtom);
  const [correct, setCorrect] = useAtom(correctAtom);
  const [solved, setSolved] = useAtom(solvedAtom);
  const [flipping, setFlipping] = useAtom(flippingAtom);
  const [letterCount, setLetterCount] = useAtom(letterCountAtom);
  const [guessCount, setGuessCount] = useAtom(guessCountAtom);

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
          if (size == 1 && key.match(/[A-Z|a-z]/) && column < letterCount + 1) {
            var upper = key.toUpperCase();
            type(upper);
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
    if (row <= guessCount) {
      let g = grid;
      g[row - 1][column - 1] = upper;
      setGrid(g);
      setColumn(column + 1);
    }
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
    if (column == letterCount + 1) {
      setRow(row + 1);
      setColumn(1);
      var answer = word[0]
      for (let i = 1; i < letterCount; i++) {
        answer += word[i];
      }
      var guessArray = grid[row - 1];
      var guess = guessArray[0];
      for (let i = 1; i < letterCount; i++) {
        guess += guessArray[i];
      }
      const c = correct;
      var x = 0;
      let i = 0;

      for (i = 0; i < letterCount; i++) {
        const item = guessArray[i];
        const itemAnswer = answer[i];
        if (item == itemAnswer) {
          c[row - 1][i] = 'green';
          x++;
        } else if (item == answer[0] || item == answer[1] || item == answer[2] || item == answer[3] || item == answer[4] || item == answer[5]) {
          c[row - 1][i] = 'yellow';
        } else {
          c[row - 1][i] = 'grey';
        }
      }
      if (x == letterCount) {
        setColumn(undefined);
        alert('good job');
      }
    }
  }

  if (guessCount == 5) {
    return (
      <>
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col">
              <div className='title'>Words</div>
              <Row id='1' />
              <Row id='2' />
              <Row id='3' />
              <Row id='4' />
              <Row id='5' />
            </div>
          </div>
        </div>
      </>
    );
  }

  if (guessCount == 6) {
    return (
      <>
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col">
              <div className='title'>Words</div>
              <Row id='1' />
              <Row id='2' />
              <Row id='3' />
              <Row id='4' />
              <Row id='5' />
              <Row id='6' />
            </div>
          </div>
        </div>
      </>
    );
  }

  if (guessCount == 7) {
    return (
      <>
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col">
              <div className='title'>Words</div>
              <Row id='1' />
              <Row id='2' />
              <Row id='3' />
              <Row id='4' />
              <Row id='5' />
              <Row id='6' />
              <Row id='7' />
            </div>
          </div>
        </div>
      </>
    );
  }
}